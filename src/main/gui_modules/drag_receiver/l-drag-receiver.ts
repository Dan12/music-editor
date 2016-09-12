import { AbstractLogic } from '../../abstracts/logic';
import { FilePayload } from '../../events/release-file';
import { intersectRect } from '../../utils/math';

/**
 * @property drag_receiver_style
 * @for DragReceiverLogic
 */
const drag_receiver_style = {
  'background-color': 'rgb(220,120,120)',
  'width': '200px',
  'text-align': 'center',
  'max-height': '100%',
  'overflow-y': 'scroll',
  'position': 'absolute',
  'bottom': '0px',
  'display': 'inline-block'
};

/**
 * listens for
 * @class DragReceiverLogic
 * @constructor
 */
export class DragReceiverLogic extends AbstractLogic {

  private dragging = false;
  private dragged_first = true;

  public padding = 0;

  constructor(container: JQuery) {
    super(container, drag_receiver_style);

    this.initializeGUI();

    this.initializeActions();
  }

  /**
   * initialize the rest of the gui for this element
   * @method initializeGUI
   * @private
   */
  private initializeGUI() {
    this.container.css({'padding': this.padding + 'px 8px'});

    this.container.append('<p id="prompt" style="margin: 0;">Drop Here</p>');
  }

  /**
   * initialize the mouse event listeners for this element to prompt for drop
   * @method initializeActions
   * @private
   */
  private initializeActions(): void {
    $('body').mousedown(() => { this.dragging = true; });
    $('body').mouseup(() => {
      this.dragging = false;
      this.container.css('padding-top', this.padding + 'px');
    });
  }

  /**
   * event fired when a dragable file is being dragged, animate drop prompt if over.
   * Only fired if dragging flag set to true and on the first drag and drop
   * @method dragableFileDragged
   * @param obj {FilePayload} the event payload
   */
  public dragableFileDragged = (obj: FilePayload): void => {
    if (
        this.dragging &&
        intersectRect(this.container[0].getBoundingClientRect(), obj.element[0].getBoundingClientRect())
    ) {
      this.container.css('padding-top', '100px');
    } else {
      this.container.css('padding-top', this.padding + 'px');
    }
  }

  /**
   * event fired on drag and drop. make sure that the rectangles intersect. Clones the dropped element
   * @method receiveFile
   * @param obj {FilePayload} the payload for the object
   */
  public receiveFile = (obj: FilePayload): void => {
    let recieveRect = this.container[0].getBoundingClientRect();
    let fileRect = obj.element[0].getBoundingClientRect();
    if (intersectRect(recieveRect, fileRect)) {
      // clone the dropped element
      let append_element = obj.element.clone();
      append_element.css({'position': '', 'top': '', 'left': '', 'margin': '4px 8px'});
      this.container.append(append_element);

      // scroll the container to the bottom
      this.container.scrollTop(this.container[0].scrollHeight);

      // get the bounding rectangle of the appended element
      let rect = append_element[0].getBoundingClientRect();
      // hide the appended element
      append_element.css({'z-index': '-10', 'position': 'relative'});
      append_element.removeClass('grabbing');

      // remove the prompt and set the text align to left if this is the first drop
      if (this.dragged_first) {
        $('#prompt').remove();
        this.container.css('text-align', 'left');
        this.dragged_first = false;
      }

      // animate the dropped element to the same spot as the appended element
      // then delete the dropped element and show the appended element
      obj.element.animate({'top': (rect.top - 8) + 'px', 'left': (rect.left - 8) + 'px'}, 150, function() {
        obj.element.remove();
        append_element.css('z-index', '0');
      });
    } else {  // rects didn't intersect so remove the element
      obj.element.remove();
    }
  }
}

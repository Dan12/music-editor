import { AbstractLogic } from '../../abstracts/logic';
import { FilePayload } from '../../events/release-file';
import { intersectRect } from '../../utils/math';

/**
 * listens for
 * @class DragReceiverLogic
 * @constructor
 */
export class DragReceiverLogic extends AbstractLogic {

  private dragging: boolean = false;

  public padding = 4;

  constructor(container: JQuery) {
    super(container);

    this.initializeActions();
  }

  /**
   * initialize the mouse event listeners for this element to prompt for drop
   * @method initializeActions
   */
  private initializeActions(): void {
    $('body').mousedown(() => { this.dragging = true; });
    $('body').mouseup(() => {
      this.dragging = false;
      this.container.css('padding-top', this.padding + 'px');
    });
  }

  /**
   * event fired when a dragable file is being dragged, animate drop prompt if over
   * @method dragableFileDragged
   * @param obj {FilePayload} the event payload
   */
  public dragableFileDragged = (obj: FilePayload): void => {
    if (this.dragging && intersectRect(this.container[0].getBoundingClientRect(), obj.element[0].getBoundingClientRect())) {
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
    let recieveRect: ClientRect = this.container[0].getBoundingClientRect();
    let fileRect = obj.element[0].getBoundingClientRect();
    if (intersectRect(recieveRect, fileRect)) {
      // clone the dropped element
      let append_element = obj.element.clone();
      append_element.css({'position': '', 'top': '', 'left': '', 'margin': '4px 8px'});
      this.container.append(append_element);

      // get the bounding rectangle of the appended element
      let rect = append_element[0].getBoundingClientRect();
      // hide the appended element
      append_element.css({'z-index': '-10', 'position': 'relative'});
      append_element.removeClass('grabbing');
      $('#prompt').remove(); this.container.css('text-align', 'left');

      // scroll the container to the bottom
      this.container.scrollTop(this.container[0].scrollHeight);

      // animate the dropped element to the same spot as the appended element
      // then delete the dropped element and show the appended element
      obj.element.animate({'top': (rect.top - 8) + 'px', 'left': (rect.left - 8) + 'px'}, 150, function() {
        obj.element.remove();
        append_element.css('z-index', '0');
      });
    }
  }
}

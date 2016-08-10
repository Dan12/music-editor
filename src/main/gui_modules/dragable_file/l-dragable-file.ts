import { AbstractLogic } from '../../abstracts/logic';
import { ReleaseFileEvent} from '../../events/release-file';
import { DragFileEvent } from '../../events/drag-file';
import { EventManager } from '../../utils/event-manager';

// TODO: multiple file select, own standalone object?

/**
 * --- optional, some style ---
 * @property dragable_file_style
 * @for DragableFileLogic
 */
const dragable_file_style = {
'background-color': 'white',
'margin': '8px',
'padding': '5px 8px',
'font-size': '100%',
'border-radius': '2px',
'overflow': 'hidden',
};

/**
 * controls when this file gets dragged and fires a release event
 * @class DragableFileLogic
 * @constructor
 */
export class DragableFileLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container, dragable_file_style);

    this.initializeGUI();

    this.initializeActions();
  }

  /**
   * initialize the rest of the gui for this element
   * @method initializeGUI
   * @private
   */
  private initializeGUI() {
    this.container.addClass('grab');
  }

  /**
   * initialize the mouse event actions for this element
   * @method initializeActions
   */
  private initializeActions(): void {
    // listen for the mousedown event and duplicate this element
    this.container.mousedown((event) => {
      let left = this.container[0].getBoundingClientRect().left - 4;
      let top = this.container[0].getBoundingClientRect().top - 4;

      let drag_left_offset = event.pageX - left;
      let drag_top_offset = event.pageY - top;

      // the duplicate element
      let drag_element = $(`<div>${this.container.html()}</div>`);
      drag_element.attr('style', this.container.attr('style'));

      // set the duplicate element's position
      drag_element.css({
        'width': this.container.width() + 'px',
        'position': 'absolute', 'top': top + 'px', 'left': left + 'px'
      });
      drag_element.addClass('grabbing');
      $('body').append(drag_element);

      // listen for mouse move on the body and move the element into that position
      function bodyMove(event: JQueryMouseEventObject){
        let x = event.pageX - drag_left_offset;
        let y = event.pageY - drag_top_offset;
        drag_element.css({'top': y + 'px', 'left': x + 'px'});
        EventManager.fireEvent((new DragFileEvent).setPayload({element: drag_element, mouseX: event.pageX, mouseY: event.pageY}));
        event.preventDefault();
      }
      $('body').mousemove(bodyMove);

      // fire the release file event on mouse up for this element to register a drag and drop
      drag_element.mouseup((event) => {
        EventManager.fireEvent((new ReleaseFileEvent).setPayload({element: drag_element, mouseX: event.pageX, mouseY: event.pageY}));
        // remove the event listeners
        drag_element.unbind();
        $('body').unbind('mousemove', bodyMove);
      });

      // prevent highlighting on dragging
      event.preventDefault();
    });
  }
}

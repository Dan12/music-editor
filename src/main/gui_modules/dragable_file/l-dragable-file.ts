import { AbstractLogic } from '../../abstracts/logic';
import { ReleaseFileEvent} from '../../events/release-file';
import { EventManager } from '../../utils/event-manager';

/**
 * controls when this file gets dragged and fires a release event
 * @class DragableFileLogic
 * @constructor
 */
export class DragableFileLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container);

    this.initializeActions();
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

      // TODO: remove this listener
      // listen for mouse move on the body and move the element into that position
      $('body').mousemove((event) => {
        let x = event.pageX - drag_left_offset;
        let y = event.pageY - drag_top_offset;
        drag_element.css({'top': y + 'px', 'left': x + 'px'});
        event.preventDefault();
      });

      // fire the release file event on mouse up for this element to register a drag and drop
      drag_element.mouseup((event) => {
        EventManager.fireEvent((new ReleaseFileEvent).setPayload({element: drag_element, mouseX: event.pageX, mouseY: event.pageY}));
        drag_element.remove();
        drag_element = null;
      });

      // prevent highlighting on dragging
      event.preventDefault();
    });
  }
}

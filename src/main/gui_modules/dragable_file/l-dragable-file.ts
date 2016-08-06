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

  private initializeActions(): void {
    this.container.mousedown((event) => {
      let left = this.container[0].getBoundingClientRect().left;
      let top = this.container[0].getBoundingClientRect().top;

      let drag_left_offset = event.pageX - left;
      let drag_top_offset = event.pageY - top;

      let drag_element = $(`<div>${this.container.html()}</div>`);
      drag_element.attr('style', this.container.attr('style'));
      console.log(this.container.attr('style'));
      drag_element.css({
        'width': this.container.width() + 'px',
        'position': 'absolute', 'top': top + 'px', 'left': left + 'px'
      });
      drag_element.addClass('grabbing');
      $('body').append(drag_element);

      $('body').mousemove((event) => {
        let x = event.pageX - drag_left_offset;
        let y = event.pageY - drag_top_offset;
        drag_element.css({'top': y + 'px', 'left': x + 'px'});
        event.preventDefault();
      });

      drag_element.mouseup((event) => {
        EventManager.fireEvent((new ReleaseFileEvent).setPayload({element: drag_element, mouseX: event.pageX, mouseY: event.pageY}));
        drag_element.remove();
      });

      event.preventDefault();
    });
  }
}

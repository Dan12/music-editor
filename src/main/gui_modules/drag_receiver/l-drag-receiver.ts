import { AbstractLogic } from '../../abstracts/logic';
import { FilePayload } from '../../events/release-file';
import { intersectRect, intersectMouse } from '../../utils/math';

/**
 * --- some description ---
 * @class DragReceiverLogic
 * @constructor
 */
export class DragReceiverLogic extends AbstractLogic {

  private dragging: boolean = false;

  constructor(container: JQuery) {
    super(container);

    this.initializeActions();
  }

  private initializeActions(): void {
    $('body').mousedown(() => { this.dragging = true; });
    $('body').mouseup(() => {
      this.dragging = false;
      this.container.css('padding-top', '4px');
    });

    $('body').mousemove((event) => {
      if (this.dragging && intersectMouse(this.container[0].getBoundingClientRect(), event)) {
        this.container.css('padding-top', '100px');
      } else {
        this.container.css('padding-top', '4px');
      }
    });
  }

  public receiveFile(obj: FilePayload): void {
    let recieveRect: ClientRect = this.container[0].getBoundingClientRect();
    let fileRect = obj.element[0].getBoundingClientRect();
    if (intersectRect(recieveRect, fileRect)) {
      let append_element = obj.element.clone();
      append_element.css({'position': '', 'top': '', 'left': '', 'margin': '4px 8px'});
      this.container.append(append_element);
      append_element.removeClass('grabbing')
      $('#prompt').remove();
      this.container.scrollTop(50);
    }
  }
}

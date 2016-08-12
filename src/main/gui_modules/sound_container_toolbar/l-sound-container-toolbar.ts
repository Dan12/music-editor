import { AbstractLogic } from '../../abstracts/logic';
import { Payload } from '../../events/key-selected';
import { Color } from '../../utils/color';

/**
 * --- optional, some style ---
 * @property sound_container_toolbar_style
 * @for SoundContainerToolbarLogic
 */
const sound_container_toolbar_style = {
  'background-color': Color.gray2(),
  'position': 'relative',
  'height': '18%',
  'width': '100%',
  'display': 'inline-block',
};

/**
 * --- some description ---
 * @class SoundContainerToolbarLogic
 * @constructor
 */
export class SoundContainerToolbarLogic extends AbstractLogic {

  private top =  '-17.9%';

  private id: JQuery = undefined;

  constructor(container: JQuery) {
    super(container, sound_container_toolbar_style);

    this.open();

    let close_button = $('<div>X</div>');
    close_button.css({
      'border': '1px solid black',
      'display': 'inline',
      'padding': '2px',
      'position': 'absolute',
      'right': '0', 'top': '0',
      'cursor': 'pointer'
    });

    this.container.append(close_button);

    close_button.click(() => { this.close(); });

    this.id = $('<div></div>');
    this.container.append(this.id);
  }

  public keySelected = (obj: Payload): void => {
    if (obj.selected) {
      this.id.html(`<h1 style="margin: 0;">${obj.key.id}</h1>`);
      this.open();
    } else {
      this.close();
    }
  }

  private open(): void {
    this.container.animate({'top': this.top}, 100);
  }

  private close(): void {
    this.container.animate({'top': '0'}, 100);
  }
}

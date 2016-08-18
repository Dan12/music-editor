import { AbstractLogic } from '../../abstracts/logic';
import { KeySelectedEvent } from '../../events/key-selected';
import { EventManager } from '../../utils/event-manager';
import { Color } from '../../utils/color';

/**
 * --- optional, some style ---
 * @property keyboard_key_style
 * @for KeyboardKeyLogic
 */
const keyboard_key_style = {
  'transition': 'ease 150ms all',
  'margin': '0.3%',
  'background-color': Color.primary(),
  'border': '1px solid black',
  'border-radius': '4px',
  'display': 'inline-block',
  'cursor': 'pointer',
  'text-align': 'center'
};

/**
 * --- some description ---
 * @class KeyboardKeyLogic
 * @constructor
 */
export class KeyboardKeyLogic extends AbstractLogic {

  private dim_percentage = 0.05;
  private font_percentage = 0.68;
  private default_color = 'rgb(250,150,0)';

  public id: number = undefined;

  constructor(container: JQuery, id: number) {
    super(container, keyboard_key_style);

    this.setDimensions();
    $(window).resize(this.setDimensions);

    this.id = id;
  }

  public keydown(): void {
    console.log('down');
    // this.container.animate({'background-color': this.default_color}, this.animation_duration);
    this.container.css({'background-color': this.default_color});
  }

  public keyup(): void {
    console.log('up');
    // this.container.animate({'background-color': Color.primary()}, this.animation_duration);
    this.container.css({'background-color': Color.primary()});
  }

  public click() {
    EventManager.fireEvent((new KeySelectedEvent).setPayload({selected: true, key: this}));
  }

  private setDimensions = () => {
    let dim = window.innerWidth * this.dim_percentage;
    let tempvar = this.container.css({'width': dim + 'px', 'height': dim + 'px', 'font-size': (dim * this.font_percentage) + 'px'});
  }
}

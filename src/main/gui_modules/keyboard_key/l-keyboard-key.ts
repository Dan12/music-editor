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
 * the percentage of the width that this object takes up
 * @property dim_percentage
 * @for KeyboardKeyLogic
 * @type number
 * @default 0.05
 */
const dim_percentage = 0.05;
/**
 * the percentage of this objects width that is this objects font size
 * @property font_percentage
 * @for KeyboardKeyLogic
 * @type number
 * @default 0.68
 */
const font_percentage = 0.68;
/**
 * this objects default highlight color
 * @property font_percentage
 * @for KeyboardKeyLogic
 * @type number
 * @default 0.68
 */
const default_color = 'rgb(250,150,0)';

/**
 * The logic for a key
 * @class KeyboardKeyLogic
 * @constructor
 */
export class KeyboardKeyLogic extends AbstractLogic {

  public id: number = -1;

  constructor(container: JQuery, id: number) {
    super(container, keyboard_key_style);

    this.id = id;

    this.setDimensions();
    $(window).resize(this.setDimensions);
  }

  /**
   * highlight the key to show that the key was pressed
   * @method keydown
   */
  public keydown(): void {
    this.container.css({'background-color': default_color});
  }

  /**
   * unhighlight the key to show that the key was released
   * @method keydown
   */
  public keyup(): void {
    this.container.css({'background-color': Color.primary()});
  }

  /**
   * fire the selected event for this key
   * @method click
   */
  public click(): void {
    EventManager.fireEvent((new KeySelectedEvent).setPayload({selected: true, key: this}));
  }

  /**
   * set this objects dimensions and font on initialize and resize
   * @method setDimensions
   */
  private setDimensions = (): void => {
    let dim = window.innerWidth * dim_percentage;
    let tempvar = this.container.css({'width': dim + 'px', 'height': dim + 'px', 'font-size': (dim * font_percentage) + 'px'});
  }
}

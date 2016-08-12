import { AbstractLogic } from '../../abstracts/logic';
import { KeySelectedEvent } from '../../events/key-selected';
import { EventManager } from '../../utils/event-manager';

/**
 * --- optional, some style ---
 * @property keyboard_key_style
 * @for KeyboardKeyLogic
 */
const keyboard_key_style = {
  'margin': '0.5%',
  'background-color': 'lightgray',
  'border': '1px solid black',
  'border-radius': '2px',
  'display': 'inline-block',
  'cursor': 'pointer'
};

/**
 * --- some description ---
 * @class KeyboardKeyLogic
 * @constructor
 */
export class KeyboardKeyLogic extends AbstractLogic {

  private dim_percentage = 0.05;

  public id: string = undefined;

  constructor(container: JQuery, id: string) {
    super(container, keyboard_key_style);

    this.setDimensions();
    $(window).resize(this.setDimensions);

    this.id = id;

    this.container.click(() => {
      EventManager.fireEvent((new KeySelectedEvent).setPayload({selected: true, key: this}));
    });
  }

  private setDimensions = () => {
    let dim = window.innerWidth * this.dim_percentage;
    let tempvar = this.container.css({'width': dim + 'px', 'height': dim + 'px', 'font-size': (dim * 0.85) + 'px'});
  }
}

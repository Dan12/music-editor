import { AbstractLogic } from '../../abstracts/logic';

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

  constructor(container: JQuery) {
    super(container, keyboard_key_style);

    this.setDimensions();
    $(window).resize(this.setDimensions);
  }

  private setDimensions = () => {
    let dim = window.innerWidth * this.dim_percentage;
    let tempvar = this.container.css({'width': dim + 'px', 'height': dim + 'px', 'font-size': (dim * 0.85) + 'px'});
  }
}

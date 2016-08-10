import { AbstractDraw } from '../../abstracts/draw';
import { KeyboardKeyLogic } from './l-keyboard-key';

/**
 * --- optional, some style ---
 * @property keyboard_key_style
 * @for KeyboardKeyDraw
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
 * This class draws the elements for keyboard key
 * --- some description ---
 * @class KeyboardKeyDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class KeyboardKeyDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: KeyboardKeyLogic) {
    super(container, logic_class, keyboard_key_style);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardKeyLogic
   */
  private logicClass(): KeyboardKeyLogic { return (this._logic_class as KeyboardKeyLogic); }
}

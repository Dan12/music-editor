import { AbstractDraw } from '../../abstracts/draw';
import { KeyboardContainerLogic } from './l-keyboard-container';

/**
 * --- optional, some style ---
 * @property keyboard_container_style
 * @for KeyboardContainerDraw
 */
const keyboard_container_style = {
'height': '85%',
'width': '79%',
'display': 'inline-block',
'position': 'absolute',
'text-align': 'center',
'padding': '3%'
};

/**
 * This class draws the elements for keyboard container
 * --- some description ---
 * @class KeyboardContainerDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class KeyboardContainerDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: KeyboardContainerLogic) {
    super(container, logic_class, keyboard_container_style);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardContainerLogic
   */
  private logicClass(): KeyboardContainerLogic { return (this._logic_class as KeyboardContainerLogic); }
}

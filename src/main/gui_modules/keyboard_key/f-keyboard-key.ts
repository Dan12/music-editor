import { AbstractFacade } from '../../abstracts/facade';
import { KeyboardKeyDraw } from './d-keyboard-key';
import { KeyboardKeyLogic } from './l-keyboard-key';

/**
 * The facade for keyboard key.
 * --- Some description here ---
 * @class KeyboardKeyFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class KeyboardKeyFacade extends AbstractFacade {

  constructor(parent: JQuery, id: string) {
    super('keyboard_key', parent);

    let temp_logic = new KeyboardKeyLogic(this.container);

    // initialize this facade's enclosed classes
    this.initializeClasses(new KeyboardKeyDraw(this.container, temp_logic), temp_logic);

    this.container.html(id);
  }

  /**
   * the way to access this class's _draw_class
   * @method drawClass
   * @return KeyboardKeyDraw
   */
  protected drawClass(): KeyboardKeyDraw { return (this._draw_class as KeyboardKeyDraw); }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardKeyLogic
   */
  protected logicClass(): KeyboardKeyLogic { return (this._logic_class as KeyboardKeyLogic); }
}

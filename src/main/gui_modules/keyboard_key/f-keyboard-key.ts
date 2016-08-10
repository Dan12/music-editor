import { AbstractFacade } from '../../abstracts/facade';
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
    this.initializeLogic(new KeyboardKeyLogic(this.container));

    this.container.html(id);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardKeyLogic
   */
  protected logicClass(): KeyboardKeyLogic { return (this._logic_class as KeyboardKeyLogic); }
}

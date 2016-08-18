import { AbstractFacade } from '../../abstracts/facade';
import { KeyboardKeyLogic } from './l-keyboard-key';

import { intersectMouse } from '../../utils/math';

/**
 * The facade for keyboard key.
 * --- Some description here ---
 * @class KeyboardKeyFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class KeyboardKeyFacade extends AbstractFacade {

  constructor(parent: JQuery, id: number) {
    super('keyboard_key', parent);

    // initialize this facade's enclosed classes
    this.initializeLogic(new KeyboardKeyLogic(this.container, id));

    this.container.html(`<div class="vertical_align">${letterArray[id]}</div>`);
  }

  public click(event: JQueryMouseEventObject) {
    if (intersectMouse(this.container[0].getBoundingClientRect(), event)) {
      this.logicClass().click();
      return true;
    }
    return false;
  }

  public keydown(event: JQueryKeyEventObject): boolean {
    this.logicClass().keydown();
    return true;
  }

  public keyup(event: JQueryKeyEventObject): boolean {
    this.logicClass().keyup();
    return true;
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardKeyLogic
   */
  protected logicClass(): KeyboardKeyLogic { return (this._logic_class as KeyboardKeyLogic); }
}

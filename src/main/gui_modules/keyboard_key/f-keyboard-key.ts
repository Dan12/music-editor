import { AbstractFacade } from '../../abstracts/facade';
import { KeyboardKeyLogic } from './l-keyboard-key';

import { intersectMouse } from '../../utils/math';

/**
 * The facade for keyboard key.
 * A single html key for the keyboard
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

    this.container.click((event) => {
      this.logicClass().click();
      return false;
    });

    this.container.keyup((event) => {
      console.log('keyup');
    });
  }

  /**
   * overrides the facade keydown method
   * @method keyEvent
   * @param event {JQueryKeyEventObject} the key event
   * @return boolean
   */
  public keyEvent(event: JQueryKeyEventObject): boolean {
    if (event.type === 'keyup')
      this.logicClass().keyup();
    else if (event.type === 'keydown')
      this.logicClass().keydown();
    return true;
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardKeyLogic
   */
  protected logicClass(): KeyboardKeyLogic { return (this._logic_class as KeyboardKeyLogic); }
}

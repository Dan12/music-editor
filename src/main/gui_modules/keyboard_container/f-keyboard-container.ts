import { AbstractFacade } from '../../abstracts/facade';
import { KeyboardContainerDraw } from './d-keyboard-container';
import { KeyboardContainerLogic } from './l-keyboard-container';
import { EventManager } from '../../utils/event-manager';
import { ToggleKeyboardEvent } from '../../events/toggle-keyboard';

/**
 * The facade for keyboard container.
 * --- Some description here ---
 * @class KeyboardContainerFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class KeyboardContainerFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('keyboard_container', parent);

    let temp_logic = new KeyboardContainerLogic(this.container);

    // initialize this facade's enclosed classes
    this.initializeClasses(new KeyboardContainerDraw(this.container, temp_logic), temp_logic);

    EventManager.subscribe(new ToggleKeyboardEvent(this.logicClass().toggleVisibility));
  }

  /**
   * the way to access this class's _draw_class
   * @method drawClass
   * @return KeyboardContainerDraw
   */
  protected drawClass(): KeyboardContainerDraw { return (this._draw_class as KeyboardContainerDraw); }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardContainerLogic
   */
  protected logicClass(): KeyboardContainerLogic { return (this._logic_class as KeyboardContainerLogic); }
}

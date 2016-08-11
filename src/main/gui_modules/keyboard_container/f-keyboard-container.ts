import { AbstractFacade } from '../../abstracts/facade';
import { KeyboardContainerLogic } from './l-keyboard-container';
import { EventManager } from '../../utils/event-manager';
import { ToggleKeyboardEvent } from '../../events/toggle-keyboard';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';

import { KeyboardKeyFacade } from '../keyboard_key/f-keyboard-key';

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

    // initialize this facade's enclosed classes
    this.initializeLogic(new KeyboardContainerLogic(this.container));

    EventManager.subscribe(new ToggleKeyboardEvent(this.logicClass().toggleVisibility));

    for (let r = 0; r < 4; r++) {
      let row = $(`<div id="row_${r}"></div>`);
      this.container.append(row);
      for (let i = 0; i < 12; i++)
        this.addGuiChild(new KeyboardKeyFacade(row, `${r * 12 + i}`));
    }
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return KeyboardContainerLogic
   */
  protected logicClass(): KeyboardContainerLogic { return (this._logic_class as KeyboardContainerLogic); }
}

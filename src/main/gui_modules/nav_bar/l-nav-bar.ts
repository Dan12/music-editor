import { AbstractLogic } from '../../abstracts/logic';

import { EventManager } from '../../utils/event-manager';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';
import { ToggleKeyboardEvent } from '../../events/toggle-keyboard';

/**
 * Listens for clicks on its buttons and fires events
 * @class NavBarLogic
 * @constructor
 */
export class NavBarLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container);
  }

  /**
   * initialize the event emmiteres for the nav bar.
   * Fire an event when the expand file browser button is clicked
   * @method initializeEmitters
   */
  public initializeEmitters(): void {
    $('#toggle_file_browser').click(function(){
      EventManager.fireEvent((new ToggleFileBrowserEvent()).setPayload({}));
    });

    $('#toggle_keyboard').click(function(){
      EventManager.fireEvent((new ToggleKeyboardEvent()).setPayload({}));
    });
  }
}

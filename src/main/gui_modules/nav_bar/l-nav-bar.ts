import { AbstractLogic } from '../../abstracts/logic';

import { EventManager } from '../../utils/event-manager';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';

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
    EventManager.register(new ToggleFileBrowserEvent());
    $('#expand_file_browser').click(function(){
      EventManager.fireEvent((new ToggleFileBrowserEvent()).setPayload({}));
    });
  }
}

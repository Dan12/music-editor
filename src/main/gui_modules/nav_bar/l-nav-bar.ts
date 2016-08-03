import { AbstractLogic } from '../../abstracts/logic';

import { EventManager } from '../../utils/event-manager';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';

export class NavBarLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container);
  }

  public initializeEmitters(): void {
    EventManager.register(new ToggleFileBrowserEvent());
    $('#expand_file_browser').click(function(){
      EventManager.fireEvent((new ToggleFileBrowserEvent()).setPayload({}));
    });
  }
}

import { AbstractFacade } from '../abstracts/facade';

import { EventManager } from './event-manager';
import { KeySelectedEvent } from '../events/key-selected';

export class InputEventManager {

  static initialize(start_facade: AbstractFacade): void {
    $('body').click(function(event: JQueryMouseEventObject) {
      EventManager.fireEvent((new KeySelectedEvent()).setPayload({selected: false, key: null}));
    });
  }
}

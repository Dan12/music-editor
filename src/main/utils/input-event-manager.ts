import { AbstractFacade } from '../abstracts/facade';

import { EventManager } from './event-manager';
import { KeySelectedEvent } from '../events/key-selected';

export class InputEventManager {

  static initialize(start_facade: AbstractFacade): void {
    $('body').click(function(event: JQueryMouseEventObject) {
      console.log(event);
      // deselect
      if (!start_facade.mouseEvent(event)) {
        EventManager.fireEvent((new KeySelectedEvent()).setPayload({selected: false, key: null}));
      }
    });

    $('body').keydown(function(event: JQueryKeyEventObject) {
      start_facade.keyEvent(event);
    });

    $('body').keyup(function(event: JQueryKeyEventObject) {
      start_facade.keyEvent(event);
    });
  }
}

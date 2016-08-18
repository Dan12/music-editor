import { AbstractFacade } from '../abstracts/facade';

import { EventManager } from './event-manager';
import { KeySelectedEvent } from '../events/key-selected';

export class InputEventManager {

  static initialize(start_facade: AbstractFacade): void {
    $('body').click(function(event: JQueryMouseEventObject) {
      // deselect
      if (!start_facade.click(event)) {
        EventManager.fireEvent((new KeySelectedEvent()).setPayload({selected: false, key: null}));
      }
    });

    // $('body').mousedown(function(event: JQueryMouseEventObject) {
    //   start_facade.mousedown(event);
    // });
    //
    // $('body').mouseup(function(event: JQueryMouseEventObject) {
    //   start_facade.mouseup(event);
    // });

    $('body').keydown(function(event: JQueryKeyEventObject) {
      start_facade.keydown(event);
    });

    $('body').keyup(function(event: JQueryKeyEventObject) {
      start_facade.keyup(event);
    });
  }
}

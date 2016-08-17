import { AbstractFacade } from '../abstracts/facade';

export class InputEventManager {

  static initialize(start_facade: AbstractFacade): void {
    $('body').click(function(event: JQueryMouseEventObject) {
      start_facade.click(event);
    });
  }
}

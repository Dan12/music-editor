import { AbstractEvent } from '../abstracts/event';
import { KeyboardKeyLogic } from '../gui_modules/keyboard_key/l-keyboard-key';

/**
 * describes the payload for this event
 * @element Payload
 * @interface Payload
 */
// define own payload object here
export interface Payload {
  selected: boolean;
  key: KeyboardKeyLogic;
}

export class KeySelectedEvent extends AbstractEvent {

  /**
   * Fired when the toggle file browser button is clicked
   * @class KeySelectedEvent
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: Payload) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'key_selected');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @param obj {Payload} the payload for this event
   * @returns {KeySelectedEvent}
   */
  public setPayload(obj: Payload): KeySelectedEvent {
    this.obj = obj;
    return this;
  }
}

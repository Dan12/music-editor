import { AbstractEvent } from '../abstracts/event';

/**
 * describes the payload for this event
 * @element Payload
 * @interface Payload
 */
export interface Payload {}

export class ToggleKeyboardEvent extends AbstractEvent {

  /**
   * Fired when the toggle keyboard button is clicked
   * @class ToggleKeyboardEvent
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: Payload) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'toggle_keyboard');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @param obj {Payload} the payload for this event
   * @returns {ToggleKeyboardEvent}
   */
  public setPayload(obj: Payload): ToggleKeyboardEvent {
    this.obj = obj;
    return this;
  }
}

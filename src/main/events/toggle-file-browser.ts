import { AbstractEvent } from '../abstracts/event';

/**
 * describes the payload for this event
 * @element NoObject
 * @interface NoObject
 */
export interface NoObject {}

export class ToggleFileBrowserEvent extends AbstractEvent {

  /**
   * Fired when the toggle file browser button is clicked
   * @class ToggleFileBrowserEvent
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: NoObject) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'toggle_file_browser');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @returns {ToggleFileBrowserEvent}
   */
  public setPayload(obj: any): ToggleFileBrowserEvent {
    this.obj = obj;
    return this;
  }
}

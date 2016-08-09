import { AbstractEvent } from '../abstracts/event';

import { FilePayload } from './release-file';

export class DragFileEvent extends AbstractEvent {

  /**
   * Fired when the toggle file browser button is clicked
   * @class DragFileEvent
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: FilePayload) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'drag_file');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @param obj {Payload} the payload for this event
   * @returns {DragFileEvent}
   */
  public setPayload(obj: FilePayload): DragFileEvent {
    this.obj = obj;
    return this;
  }
}

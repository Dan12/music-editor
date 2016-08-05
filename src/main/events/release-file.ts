import { AbstractEvent } from '../abstracts/event';

/**
 * describes the payload for this event
 * @element NoObject
 * @interface NoObject
 */
// define own payload object here
export interface FilePayload {
  element: JQuery;
  mouseX: number;
  mouseY: number;
}

export class ReleaseFileEvent extends AbstractEvent {

  /**
   * Fired when the toggle file browser button is clicked
   * @class ReleaseFileEvent
   * @extends AbstractEvent
   * @constructor
   * @param [callback] {function} The optional callback function which takes an object
   */
  constructor(callback?: (obj: FilePayload) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'release_file');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @param obj {FilePayload}
   * @returns {ReleaseFileEvent}
   */
  public setPayload(obj: FilePayload): ReleaseFileEvent {
    this.obj = obj;
    return this;
  }
}

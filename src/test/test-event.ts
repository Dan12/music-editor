import { TestObj1 } from './test-obj-1';
import { EditorEvent } from './event';

/**
 * describes the payload for this event
 * @element TestInterface
 * @interface TestInterface
 */
export interface TestInterface {
  num: number;
  someString: string;
  testObj: TestObj1;
}

/**
 * Test object event class for testing the event system
 * @class TestObjEvent
 * @extends EditorEvent
 * @constructor
 * @param [callback] {function} The optional callback function which takes an object
 */
export class TestObjEvent extends EditorEvent {
  public constructor(callback?: (obj: TestInterface) => void) {
    // the name of this event is 'testing_send'
    super(callback, 'testing_send');
  };

  /**
   * Sets the payload for this event, returns this
   * @method setPayload
   * @chainable
   * @returns {EditorEvent}
   */
  public setPayload(obj: any): EditorEvent {
    this.obj = obj;
    return this;
  }
};

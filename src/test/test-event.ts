import { TestObj1 } from './test-obj-1';
import './event';

// the interface for the event object
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
 * @param [obj] {any} The optional object that means that this object hold the payload for an event
 */
export class TestObjEvent extends EditorEvent {
  public constructor(callback?: (obj: TestInterface) => void, obj?: TestInterface) {
    // the name of this event is 'testing_send'
    super(callback, obj, 'testing_send');
  };
};

import { TestInterface, TestObjEvent } from './test-event';

/**
 * A test object to subscribe to and receive an event with a payload
 * @class TestSendToObject
 * @constructor
 */
export class TestSendToObject {

  /**
   * subscribe to the TestObjEvent and have it call {{#crossLink "TestSendToObject/callbackTest:method"}}{{/crossLink}} when fired
   * @method constructor
   */
  public constructor() {
    TestEventManager.subscribe(new TestObjEvent(this.callbackTest));
  }

  /**
   * This method gets called when the {{#crossLink "TestObjEvent"}}{{/crossLink}} event gets fired
   * @method callbackTest
   * @param obj {TestInterface} an object of type test interface
   */
  private callbackTest(obj: TestInterface): void {
    console.log('Callback object:');
    console.log(obj);
    console.log(obj.num);
    console.log(obj.testObj.getNum());
    // console.log(obj.testObj.getName()); // Property 'getName' does not exist on type 'TestObj1'.
  }
}

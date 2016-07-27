import './event';
import { TestObjEvent } from './test-event';

/**
 * A test object to register and fire an event
 * @class TestObj1
 * @constructor
 */
export class TestObj1 {
  /**
   * a test number
   * @property num
   * @type number
   * @default undefined
   */
  private num: number = undefined;

  public constructor() {
    this.num = 59382;

    TestEventManager.register(new TestObjEvent());
  }

  /**
   * fires the {{#crossLink "TestObjEvent"}}{{/crossLink}} event
   * @method sendMsg
   */
  public sendMsg(): void {
    TestEventManager.fireEvent(new TestObjEvent(null, {num: this.num, someString: 'a string', testObj: this}));
  }

  /**
   * a getter for the {{#crossLink "TestObj1/num:property"}}{{/crossLink}} property
   * @method getNum
   * @return number
   */
  public getNum(): number {
    return this.num;
  }

};

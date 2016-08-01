define(["require", "exports", './test-event-manager', './test-event'], function (require, exports, test_event_manager_1, test_event_1) {
    "use strict";
    /**
     * A test object to register and fire an event
     * @class TestObj1
     * @constructor
     */
    var TestObj1 = (function () {
        function TestObj1() {
            /**
             * a test number
             * @property num
             * @type number
             * @default undefined
             */
            this.num = undefined;
            this.num = 454567;
            test_event_manager_1.TestEventManager.register(new test_event_1.TestObjEvent());
        }
        /**
         * fires the {{#crossLink "TestObjEvent"}}{{/crossLink}} event
         * @method sendMsg
         */
        TestObj1.prototype.sendMsg = function () {
            test_event_manager_1.TestEventManager.fireEvent(new test_event_1.TestObjEvent().setPayload({ num: this.num, someString: 'a string', testObj: this }));
        };
        /**
         * a getter for the {{#crossLink "TestObj1/num:property"}}{{/crossLink}} property
         * @method getNum
         * @return number
         */
        TestObj1.prototype.getNum = function () {
            return this.num;
        };
        return TestObj1;
    }());
    exports.TestObj1 = TestObj1;
    ;
});

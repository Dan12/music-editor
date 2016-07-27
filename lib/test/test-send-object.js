define(["require", "exports", './test-event', './test-event-manager'], function (require, exports, test_event_1, test_event_manager_1) {
    "use strict";
    /**
     * A test object to subscribe to and receive an event with a payload
     * @class TestSendToObject
     * @constructor
     */
    var TestSendToObject = (function () {
        /**
         * subscribe to the TestObjEvent and have it call {{#crossLink "TestSendToObject/callbackTest:method"}}{{/crossLink}} when fired
         * @method constructor
         */
        function TestSendToObject() {
            test_event_manager_1.TestEventManager.subscribe(new test_event_1.TestObjEvent(this.callbackTest));
        }
        /**
         * This method gets called when the {{#crossLink "TestObjEvent"}}{{/crossLink}} event gets fired
         * @method callbackTest
         * @param obj {TestInterface} an object of type test interface
         */
        TestSendToObject.prototype.callbackTest = function (obj) {
            console.log('Callback object:');
            console.log(obj);
            console.log(obj.num);
            console.log(obj.testObj.getNum());
            // console.log(obj.testObj.getName()); // Property 'getName' does not exist on type 'TestObj1'.
        };
        return TestSendToObject;
    }());
    exports.TestSendToObject = TestSendToObject;
});

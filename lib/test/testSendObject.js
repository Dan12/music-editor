define(["require", "exports", './testObjEvent'], function (require, exports, testObjEvent_1) {
    "use strict";
    var TestSendToObject = (function () {
        function TestSendToObject() {
            eventManager.subscribe(new testObjEvent_1.TestObjEvent(this.callbackTest));
        }
        TestSendToObject.prototype.callbackTest = function (obj) {
            console.log('Callback object:');
            console.log(obj);
        };
        return TestSendToObject;
    }());
    exports.TestSendToObject = TestSendToObject;
});

define(["require", "exports", './testObj1'], function (require, exports, testObj1_1) {
    "use strict";
    // import { TestObjEvent } from './testObjEvent';
    var TestSendToObject = (function () {
        function TestSendToObject() {
            eventManager.subscribe(new testObj1_1.TestObjEvent(this.callbackTest));
        }
        TestSendToObject.prototype.callbackTest = function (obj) {
            console.log('Callback object:');
            console.log(obj);
            console.log(obj.getNum());
            // console.log(obj.getName()); // property does not exist on type TestObj1
        };
        return TestSendToObject;
    }());
    exports.TestSendToObject = TestSendToObject;
});

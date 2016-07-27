define(["require", "exports", './testEvent', './Event'], function (require, exports, testEvent_1) {
    "use strict";
    var TestObj1 = (function () {
        function TestObj1() {
            this.num = 5331341999;
            eventManager.register(new testEvent_1.TestObjEvent());
        }
        TestObj1.prototype.sendMsg = function () {
            eventManager.fireEvent(new testEvent_1.TestObjEvent(null, { num: this.num, someString: 'a test string', testObj: this }));
        };
        TestObj1.prototype.getNum = function () {
            return this.num;
        };
        return TestObj1;
    }());
    exports.TestObj1 = TestObj1;
    ;
});

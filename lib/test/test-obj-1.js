define(["require", "exports", './test-event', './event'], function (require, exports, test_event_1) {
    "use strict";
    var TestObj1 = (function () {
        function TestObj1() {
            this.num = 5331341999;
            eventManager.register(new test_event_1.TestObjEvent());
        }
        TestObj1.prototype.sendMsg = function () {
            eventManager.fireEvent(new test_event_1.TestObjEvent(null, { num: this.num, someString: 'a string', testObj: this }));
        };
        TestObj1.prototype.getNum = function () {
            return this.num;
        };
        return TestObj1;
    }());
    exports.TestObj1 = TestObj1;
    ;
});

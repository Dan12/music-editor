define(["require", "exports", './testObjEvent', './Event'], function (require, exports, testObjEvent_1) {
    "use strict";
    var TestObj1 = (function () {
        function TestObj1() {
            this.num = 5331341;
            eventManager.register(new testObjEvent_1.TestObjEvent());
        }
        TestObj1.prototype.sendMsg = function () {
            eventManager.fireEvent(new testObjEvent_1.TestObjEvent(null, this));
        };
        return TestObj1;
    }());
    exports.TestObj1 = TestObj1;
    ;
});

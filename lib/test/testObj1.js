var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './Event'], function (require, exports) {
    "use strict";
    var TestObjEvent = (function (_super) {
        __extends(TestObjEvent, _super);
        function TestObjEvent(callback, obj) {
            _super.call(this, callback, obj, 'testing_send');
        }
        ;
        return TestObjEvent;
    }(EditorEvent));
    exports.TestObjEvent = TestObjEvent;
    ;
    var TestObj1 = (function () {
        function TestObj1() {
            this.num = 5331341999;
            eventManager.register(new TestObjEvent());
        }
        TestObj1.prototype.sendMsg = function () {
            eventManager.fireEvent(new TestObjEvent(null, { num: this.num, someString: 'a test string', testObj: this }));
        };
        TestObj1.prototype.getNum = function () {
            return this.num;
        };
        return TestObj1;
    }());
    exports.TestObj1 = TestObj1;
    ;
});

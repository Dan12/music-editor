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
            _super.call(this);
            this.name = 'test_send';
            callback ? this.callback = callback : this.obj = obj;
        }
        ;
        TestObjEvent.prototype.getName = function () {
            return this.name;
        };
        TestObjEvent.prototype.getArgs = function () {
            return this.obj;
        };
        ;
        TestObjEvent.prototype.eventFired = function (eventClass) {
            this.callback(eventClass.getArgs());
        };
        return TestObjEvent;
    }(EditorEvent));
    exports.TestObjEvent = TestObjEvent;
    ;
});

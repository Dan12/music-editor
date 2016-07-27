var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports"], function (require, exports) {
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
});

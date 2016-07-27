var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './event'], function (require, exports) {
    "use strict";
    /**
     * Test object event class for testing the event system
     * @class TestObjEvent
     * @extends EditorEvent
     * @constructor
     * @param [callback] {function} The optional callback function which takes an object
     * @param [obj] {any} The optional object that means that this object hold the payload for an event
     */
    var TestObjEvent = (function (_super) {
        __extends(TestObjEvent, _super);
        function TestObjEvent(callback, obj) {
            // the name of this event is 'testing_send'
            _super.call(this, callback, obj, 'testing_send');
        }
        ;
        return TestObjEvent;
    }(EditorEvent));
    exports.TestObjEvent = TestObjEvent;
    ;
});

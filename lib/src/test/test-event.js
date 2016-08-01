var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './event-test'], function (require, exports, event_test_1) {
    "use strict";
    /**
     * Test object event class for testing the event system
     * @class TestObjEvent
     * @extends TestEditorEvent
     * @constructor
     * @param [callback] {function} The optional callback function which takes an object
     */
    var TestObjEvent = (function (_super) {
        __extends(TestObjEvent, _super);
        function TestObjEvent(callback) {
            // the name of this event is 'testing_send'
            _super.call(this, callback, 'testing_send');
        }
        ;
        /**
         * Sets the payload for this event, returns this
         * @method setPayload
         * @chainable
         * @returns {TestEditorEvent}
         */
        TestObjEvent.prototype.setPayload = function (obj) {
            this.obj = obj;
            return this;
        };
        return TestObjEvent;
    }(event_test_1.TestEditorEvent));
    exports.TestObjEvent = TestObjEvent;
    ;
});
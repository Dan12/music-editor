define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * The Abstract Event abstract class is the basis for each event
     * @class AbstractEvent
     * @constructor
     * @param callback {function} The callback function which takes an object
     * @param obj {any} The optional object that means that this object hold the payload for an event
     * @param name {string} The name of this event
     */
    var AbstractEvent = (function () {
        function AbstractEvent(callback, name) {
            /**
             * The name of the event
             * @property name
             * @type string
             * @default undefined
             * @protected
             */
            this.name = undefined;
            /**
             * The callback function for the event payload
             * @property callback
             * @type function
             * @default undefined
             * @protected
             */
            this.callback = undefined;
            /**
             * The payload for the callback function
             * @property obj
             * @type object
             * @default undefined
             * @protected
             */
            this.obj = undefined;
            this.callback = callback;
            this.name = name;
        }
        /**
         * Returns the name of the event
         * @method getName
         * @return {string}
         */
        AbstractEvent.prototype.getName = function () {
            return this.name;
        };
        /**
         * Returns the payload for this event, may be undefined if not initialized
         * @method getPayload
         * @return {object} the payload for this event
         */
        AbstractEvent.prototype.getPayload = function () {
            return this.obj;
        };
        ;
        /**
         * Called when event fired with an event class.
         * @method eventFired
         * @param eventClass {AbstractEvent} the event object holding the payload for this event
         */
        AbstractEvent.prototype.eventFired = function (eventClass) {
            this.callback(eventClass.getPayload());
        };
        return AbstractEvent;
    }());
    exports.AbstractEvent = AbstractEvent;
});

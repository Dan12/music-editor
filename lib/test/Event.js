/**
 * The Editor Event abstract class is the basis for each event
 * @class EditorEvent
 * @constructor
 * @param callback {function} The callback function which takes an object
 * @param obj {any} The optional object that means that this object hold the payload for an event
 * @param name {string} The name of this event
 */
var EditorEvent = (function () {
    function EditorEvent(callback, obj, name) {
        /**
         * The name of the event
         * @property name
         * @type string
         * @default null
         */
        this.name = null;
        /**
         * The callback function for the event payload
         * @property callback
         * @type function
         * @default null
         */
        this.callback = null;
        /**
         * The payload for the callback function
         * @property obj
         * @type object
         * @default null
         */
        this.obj = null;
        callback ? this.callback = callback : this.obj = obj;
        this.name = name;
    }
    /**
     * Returns the name of the event
     * @method getName
     * @return {string}
     */
    EditorEvent.prototype.getName = function () {
        return this.name;
    };
    /**
     * Returns the payload for this event, may be null if not initialized
     * @method getPayload
     * @return {object} the payload for this event
     */
    EditorEvent.prototype.getPayload = function () {
        return this.obj;
    };
    ;
    /**
     * Called when event fired with an event class.
     * @method eventFired
     * @param eventClass {EditorEvent} the event class holding the payload for this event
     */
    EditorEvent.prototype.eventFired = function (eventClass) {
        this.callback(eventClass.getPayload());
    };
    return EditorEvent;
}());

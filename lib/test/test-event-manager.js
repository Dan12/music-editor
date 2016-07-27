define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * The Test Event Manager class
     * @class TestEventManager
     * @static
     * @requires {EditorEvent}
     */
    var TestEventManager = (function () {
        // throw error if trying to create instance of class
        function TestEventManager() {
            throw new Error('Cannot create a new instance of this class');
        }
        /**
         * Registers a new event by setting a property in the {{#crossLink "TestEventManager/events:property"}}{{/crossLink}} object
         * @method register
         * @param eventClass {EditorEvent} the event to register
         */
        TestEventManager.register = function (eventClass) {
            console.log('registering ' + eventClass.getName());
            if (TestEventManager.events[eventClass.getName()] === undefined)
                TestEventManager.events[eventClass.getName()] = [];
            else
                console.log('Error. this event already exists');
        };
        /**
         * Subscribes an event callback to that event
         * @method subscribe
         * @param eventClass {EditorEvent} the event with the callback subscribed to this event
         */
        TestEventManager.subscribe = function (eventClass) {
            if (TestEventManager.events[eventClass.getName()])
                TestEventManager.events[eventClass.getName()].push(eventClass);
            else
                console.log('Error. event doesn\'t exist');
        };
        /**
         * Fires the specified event with the payload defined in the event
         * @method fireEvent
         * @param eventClass {EditorEvent} the event with the payload to fire to all subscribers
         */
        TestEventManager.fireEvent = function (eventClass) {
            if (TestEventManager.events[eventClass.getName()])
                // iterate over all subscribers
                for (var i = 0; i < TestEventManager.events[eventClass.getName()].length; i++)
                    TestEventManager.events[eventClass.getName()][i].eventFired(eventClass);
            else
                console.log('Error. called event wasn\'t registered');
        };
        /**
         * Checks if all registered events have at least one subscriber
         * log it to the console because this likely means there is an error somewhere
         * @method checkEvents
         */
        TestEventManager.checkEvents = function () {
            for (var name_1 in TestEventManager.events) {
                if (TestEventManager.events[name_1].length === 0)
                    console.log('Event ' + name_1 + ' was registered but never subscribed to');
            }
            return true;
        };
        /**
         * The Object containing all registered events and event subscribers
         * @property events
         * @type object
         * @default {}
         */
        TestEventManager.events = {};
        return TestEventManager;
    }());
    exports.TestEventManager = TestEventManager;
});

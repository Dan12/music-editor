// no export to make global class
var TestEventManager = (function () {
    // empty object of events
    function TestEventManager() {
        this.events = {};
    }
    // object registers an event that can be fired
    TestEventManager.prototype.register = function (eventClass) {
        console.log('registering ' + eventClass.getName());
        if (this.events[eventClass.getName()] === undefined)
            this.events[eventClass.getName()] = [];
        else
            console.log('Error. this event already exists');
    };
    // object subscribes to an event that can be fired
    TestEventManager.prototype.subscribe = function (eventClass) {
        if (this.events[eventClass.getName()])
            this.events[eventClass.getName()].push(eventClass);
        else
            console.log('Error. event doesn\'t exist');
    };
    // an object fires the specified event
    TestEventManager.prototype.fireEvent = function (eventClass) {
        if (this.events[eventClass.getName()])
            for (var i = 0; i < this.events[eventClass.getName()].length; i++)
                this.events[eventClass.getName()][i].eventFired(eventClass);
        else
            console.log('Error. called event wasn\'t registered');
    };
    // check the current event list for any errors
    TestEventManager.prototype.checkEvents = function () {
        for (var name_1 in this.events) {
            if (this.events[name_1].length === 0)
                console.log('Event ' + name_1 + ' was registered but never subscribed to');
        }
        return true;
    };
    return TestEventManager;
}());

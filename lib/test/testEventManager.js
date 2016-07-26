// no export to make public class
var TestEventManager = (function () {
    function TestEventManager() {
        this.events = {};
    }
    TestEventManager.prototype.register = function (eventClass) {
        if (this.events[eventClass.getName()] === undefined)
            this.events[eventClass.getName()] = [];
        else
            console.log('Error. this event already exists');
    };
    TestEventManager.prototype.subscribe = function (eventClass) {
        if (this.events[eventClass.getName()])
            this.events[eventClass.getName()].push(eventClass);
        else
            console.log('Error. event doesn\'t exist');
    };
    TestEventManager.prototype.fireEvent = function (eventClass) {
        if (this.events[eventClass.getName()])
            for (var i = 0; i < this.events[eventClass.getName()].length; i++)
                this.events[eventClass.getName()][i].eventFired(eventClass);
        else
            console.log('Error. called event wasn\'t registered');
    };
    TestEventManager.prototype.checkEvents = function () {
        for (var name_1 in this.events) {
            if (this.events[name_1].length === 0)
                console.log('Event ' + name_1 + ' was registered but never subscribed to');
        }
        return true;
    };
    return TestEventManager;
}());

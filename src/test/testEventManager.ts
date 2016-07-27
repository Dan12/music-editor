// no export to make global class
class TestEventManager {

    private events: Object;

    // empty object of events
    public constructor() {
        this.events = {};
    }

    // object registers an event that can be fired
    public register(eventClass: EditorEvent): void {
        console.log('registering ' + eventClass.getName());
        if (this.events[eventClass.getName()] === undefined)
            this.events[eventClass.getName()] = [];
        else
            console.log('Error. this event already exists');
    }

    // object subscribes to an event that can be fired
    public subscribe(eventClass: EditorEvent): void {
        if (this.events[eventClass.getName()])
            this.events[eventClass.getName()].push(eventClass);
        else
            console.log('Error. event doesn\'t exist');
    }

    // an object fires the specified event
    public fireEvent(eventClass: EditorEvent): void {
        if (this.events[eventClass.getName()])
            for (let i = 0; i < this.events[eventClass.getName()].length; i++)
                this.events[eventClass.getName()][i].eventFired(eventClass);
        else
            console.log('Error. called event wasn\'t registered');
    }

    // check the current event list for any errors
    public checkEvents() {
        for (let name in this.events) {
            if (this.events[name].length === 0)
                console.log('Event ' + name + ' was registered but never subscribed to');
        }
        return true;
    }

}

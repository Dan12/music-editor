// no export to make public class
class TestEventManager {

    private events: Object;

    public constructor() {
        this.events = {};
    }

    public register(eventClass: EditorEvent): void {
        if (this.events[eventClass.getName()] === undefined)
            this.events[eventClass.getName()] = [];
        else
            console.log('Error. this event already exists');
    }

    public subscribe(eventClass: EditorEvent): void {
        if (this.events[eventClass.getName()])
            this.events[eventClass.getName()].push(eventClass);
        else
            console.log('Error. event doesn\'t exist');
    }

    public fireEvent(eventClass: EditorEvent): void {
        if (this.events[eventClass.getName()])
            for (let i = 0; i < this.events[eventClass.getName()].length; i++)
                this.events[eventClass.getName()][i].eventFired(eventClass);
        else
            console.log('Error. called event wasn\'t registered');
    }

    public checkEvents() {
        for (let name in this.events) {
            if (this.events[name].length === 0)
                console.log('Event ' + name + ' was registered but never subscribed to');
        }
        return true;
    }

}
// global abstract class
abstract class EditorEvent {

    // the name of the event (unique)
    protected name: string;
    // an optional callback object
    protected callback: (obj: any) => void;
    protected obj: any;

    constructor(callback: (obj: any) => void, obj: any, name: string) {
        callback ? this.callback = callback : this.obj = obj;
        this.name = name;
    }

    // returns the event name
    public getName(): string{
        return this.name;
    }

    public getArgs() {
        return this.obj;
    };

    public eventFired(eventClass: EditorEvent): void {
        this.callback(eventClass.getArgs());
    }
}
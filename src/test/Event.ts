/**
 * The Editor Event abstract class is the basis for each event
 * @class EditorEvent
 * @constructor
 * @param callback {function} The callback function which takes an object
 * @param obj {any} The optional object that means that this object hold the payload for an event
 * @param name {string} The name of this event
 */
abstract class EditorEvent {
    /**
     * The name of the event
     * @property name
     * @type string
     * @default null
     */
    protected name: string = null;

    /**
     * The callback function for the event payload
     * @property callback
     * @type function
     * @default null
     */
    protected callback: (obj: any) => void = null;

    /**
     * The payload for the callback function
     * @property obj
     * @type object
     * @default null
     */
    protected obj: any = null;

    constructor(callback: (obj: any) => void, obj: any, name: string) {
        callback ? this.callback = callback : this.obj = obj;
        this.name = name;
    }

    /**
     * Returns the name of the event
     * @method getName
     * @return {string}
     */
    public getName(): string {
        return this.name;
    }

    /**
     * @method getPayload
     * @return {object} the payload for this event
     */
    public getPayload(): any {
        return this.obj;
    };

    /**
     * Called when event fired with an event class.
     * @method eventFired
     * @param eventClass {EditorEvent} the event class holding the payload for this event
     */
    public eventFired(eventClass: EditorEvent): void {
        this.callback(eventClass.getPayload());
    }
}

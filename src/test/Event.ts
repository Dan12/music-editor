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
   * @default undefined
   */
  protected name: string = undefined;

  /**
   * The callback function for the event payload
   * @property callback
   * @type function
   * @default undefined
   */
  protected callback: (obj: any) => void = undefined;

  /**
   * The payload for the callback function
   * @property obj
   * @type object
   * @default undefined
   */
  protected obj: any = undefined;

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
   * Returns the payload for this event, may be undefined if not initialized
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

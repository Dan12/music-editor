/**
 * The Abstract Event abstract class is the basis for each event
 * @class AbstractEvent
 * @constructor
 * @param callback {function} The callback function which takes an object
 * @param name {string} The name of this event
 */
export abstract class AbstractEvent {
  /**
   * The name of the event
   * @property name
   * @type string
   * @default undefined
   * @protected
   */
  protected name: string = undefined;

  /**
   * The callback function for the event payload
   * @property callback
   * @type function
   * @default undefined
   * @protected
   */
  protected callback: (obj: any) => void = undefined;

  /**
   * The payload for the callback function
   * @property obj
   * @type object
   * @default undefined
   * @protected
   */
  protected obj: any = undefined;

  constructor(callback: (obj: any) => void, name: string) {
    this.callback = callback;
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
   * Sets the payload for this event, returns this
   * must be instantiated by the subclass to complete the interface promise for the payload
   * when instantiated, the type of obj should not be anything
   * the method in the sub class should look like this
   *
   *    this.obj = obj;
   *    return this;
   *
   * @method setPayload
   * @chainable
   * @param obj {any} the object that the payload gets set to
   * @returns {AbstractEvent}
   */
  abstract setPayload(obj: any): AbstractEvent;

  /**
   * Called when event fired with an event class.
   * @method eventFired
   * @param eventClass {AbstractEvent} the event object holding the payload for this event
   */
  public eventFired(eventClass: AbstractEvent): void {
    this.callback(eventClass.getPayload());
  }
}

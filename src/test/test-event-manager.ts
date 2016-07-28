import { TestEditorEvent } from './event';

/**
 * The Test Event Manager class
 * @class TestEventManager
 * @static
 * @requires {TestEditorEvent}
 */
export class TestEventManager {
  /**
   * The Object containing all registered events and event subscribers
   * @property events
   * @type object
   * @default {}
   */
  static events: Object = {};

  // throw error if trying to create instance of class
  constructor() {
    throw new Error('Cannot create a new instance of this class');
  }

  /**
   * Registers a new event by setting a property in the {{#crossLink "TestEventManager/events:property"}}{{/crossLink}} object
   * @method register
   * @param eventClass {TestEditorEvent} the event to register
   */
  static register(eventClass: TestEditorEvent): void {
    console.log('registering ' + eventClass.getName());
    if (TestEventManager.events[eventClass.getName()] === undefined)
      TestEventManager.events[eventClass.getName()] = [];
    else
      console.log('Error. this event already exists');
  }

  /**
   * Subscribes an event callback to that event
   * @method subscribe
   * @param eventClass {TestEditorEvent} the event with the callback subscribed to this event
   */
  static subscribe(eventClass: TestEditorEvent): void {
    if (TestEventManager.events[eventClass.getName()])
      TestEventManager.events[eventClass.getName()].push(eventClass);
    else
      console.log('Error. event doesn\'t exist');
  }

  /**
   * Fires the specified event with the payload defined in the event
   * @method fireEvent
   * @param eventClass {TestEditorEvent} the event with the payload to fire to all subscribers
   */
  static fireEvent(eventClass: TestEditorEvent): void {
    if (TestEventManager.events[eventClass.getName()])
      // iterate over all subscribers
      for (let i = 0; i < TestEventManager.events[eventClass.getName()].length; i++)
        TestEventManager.events[eventClass.getName()][i].eventFired(eventClass);
    else
      console.log('Error. called event wasn\'t registered');
  }

  /**
   * Checks if all registered events have at least one subscriber
   * log it to the console because this likely means there is an error somewhere
   * @method checkEvents
   */
  static checkEvents() {
    for (let name in TestEventManager.events) {
      if (TestEventManager.events[name].length === 0)
        console.log('Event ' + name + ' was registered but never subscribed to');
    }
    return true;
  }

}

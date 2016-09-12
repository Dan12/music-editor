import { AbstractEvent } from './event';

/**
 * The Event Manager class
 * @class EventManager
 * @static
 * @requires {AbstractEvent}
 */
export class EventManager {
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
   * Registers a new event by setting a property in the {{#crossLink "AbstractEvent/events:property"}}{{/crossLink}} object
   * @method register
   * @param event_object {AbstractEvent} the event to register
   */
  static register(event_object: AbstractEvent): void {
    console.log('registering "' + event_object.getName() + '"');
    if (EventManager.events[event_object.getName()] === undefined)
      EventManager.events[event_object.getName()] = [];
    else
      console.log('Error. this event already exists');
  }

  /**
   * Subscribes an event callback to that event
   * @method subscribe
   * @param eventClass {TestEditorEvent} the event with the callback subscribed to this event
   */
  static subscribe(event_object: AbstractEvent): void {
    if (EventManager.events[event_object.getName()])
      EventManager.events[event_object.getName()].push(event_object);
    else
      console.log('Error. event doesn\'t exist');
  }

  /**
   * Fires the specified event with the payload defined in the event
   * @method fireEvent
   * @param eventClass {TestEditorEvent} the event with the payload to fire to all subscribers
   */
  static fireEvent(event_object: AbstractEvent): void {
    if (EventManager.events[event_object.getName()])
      // iterate over all subscribers
      for (let i = 0; i < EventManager.events[event_object.getName()].length; i++)
        EventManager.events[event_object.getName()][i].eventFired(event_object);
    else
      console.log('Error. called event wasn\'t registered');
  }

  /**
   * Checks if all registered events have at least one subscriber
   * log it to the console because this likely means there is an error somewhere
   * @method checkEvents
   */
  static checkEvents() {
    for (let name in EventManager.events) {
      if (EventManager.events[name].length === 0)
        console.log('Event "' + name + '" was registered but never subscribed to');
    }
    return true;
  }

}

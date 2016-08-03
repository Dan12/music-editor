import { AbstractEvent } from './event';
import { EventManager } from '../utils/event-manager';

export abstract class AbstractLogic {
  /**
   * the JQuery element that is this gui element
   * @property container
   * @type JQuery
   * @default undefined
   */
  protected container: JQuery = undefined;

  /**
   * create the jquery object for this object's container
   * @class AbstractLogic
   * @param container {JQuery} this elements id
   */
  constructor(container: JQuery) {
    this.container = container;
  }
}

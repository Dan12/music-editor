import { AbstractEvent } from './event';
import { EventManager } from '../utils/event-manager';

export abstract class AbstractLogic {
  protected handleClick(x: number, y: number): void {
    // do something about the click
  }
}

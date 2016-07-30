import { AbstractEvent } from './event';
import { EventManager } from '../utils/event-manager';

export abstract class AbstractLogic {
  protected handle_click(x: number, y: number): void {
    // do something about the click
  }
}

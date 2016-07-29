import { AbstractDraw } from './draw';
import { AbstractLogic } from './logic';

export abstract class AbstractFacade {
  protected draw_class: AbstractDraw;

  protected logic_class: AbstractLogic;

  protected draw(): void {
    this.draw_class.draw();
  }
}
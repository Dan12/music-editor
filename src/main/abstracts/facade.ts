import { AbstractDraw } from './draw';
import { AbstractLogic } from './logic';

export abstract class AbstractFacade {
  protected draw_class: AbstractDraw;

  protected logic_class: AbstractLogic;

  /**
   * initialize the html of the gui element
   */
  public initialize_gui(): void {
    this.draw_class.initialize();
  }

  /**
   * redrawing of custom canvas elements sent down the heirarchy
   */
  public redraw(): void {
    this.draw_class.redraw();
  }
}

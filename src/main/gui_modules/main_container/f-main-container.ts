import { AbstractFacade } from '../../abstracts/facade';
import { MainContainerDraw } from './d-main-container';
import { MainContainerLogic } from './l-main-container';

export class MainContainerFacade extends AbstractFacade {

  constructor() {
    super();

    this.draw_class = new MainContainerDraw();
    this.logic_class = new MainContainerLogic();
  }

}

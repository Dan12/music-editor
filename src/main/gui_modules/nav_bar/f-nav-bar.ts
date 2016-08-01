import { AbstractFacade } from '../../abstracts/facade';
import { NavBarDraw } from './d-nav-bar';
import { NavBarLogic } from './l-nav-bar';

export class NavBarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('nav_bar', parent, 'nav');

    this.draw_class = new NavBarDraw(this.container);
    this.logic_class = new NavBarLogic();
  }

}

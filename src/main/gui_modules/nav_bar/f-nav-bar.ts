import { AbstractFacade } from '../../abstracts/facade';
import { NavBarDraw } from './d-nav-bar';
import { NavBarLogic } from './l-nav-bar';

export class NavBarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('nav_bar', parent, 'nav');

    this.initializeClasses(new NavBarDraw(this.container), new NavBarLogic());

    this.drawClass().addButton('expand_file_browser', 'Expand File Browser');
    this.drawClass().addButton('toggle_keyboard', 'Show Keyboard');
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return NavBarDraw
   */
  protected drawClass(): NavBarDraw { return (this.draw_class as NavBarDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): NavBarLogic { return (this.logic_class as NavBarLogic); }

}

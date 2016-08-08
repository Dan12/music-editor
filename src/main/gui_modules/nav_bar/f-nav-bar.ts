import { AbstractFacade } from '../../abstracts/facade';
import { NavBarDraw } from './d-nav-bar';
import { NavBarLogic } from './l-nav-bar';

import { EventManager } from '../../utils/event-manager';

export class NavBarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('nav_bar', parent, 'nav');

    let temp_logic = new NavBarLogic(this.container);
    this.initializeClasses(new NavBarDraw(this.container, temp_logic), temp_logic);

    // add two buttons to the nav bar
    this.drawClass().addButton('toggle_file_browser', 'Toggle File Browser');
    this.drawClass().addButton('toggle_keyboard', 'Toggle Keyboard');

    // initialize event emittors for the buttons that were just added
    this.logicClass().initializeEmitters();
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return NavBarDraw
   */
  protected drawClass(): NavBarDraw { return (this._draw_class as NavBarDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): NavBarLogic { return (this._logic_class as NavBarLogic); }

}

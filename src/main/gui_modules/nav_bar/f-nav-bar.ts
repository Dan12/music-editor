import { AbstractFacade } from '../../abstracts/facade';
import { NavBarLogic } from './l-nav-bar';

import { EventManager } from '../../utils/event-manager';

export class NavBarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('nav_bar', parent, 'nav');

    this.initializeLogic(new NavBarLogic(this.container));

    // initialize event emittors for the buttons that were just added
    this.logicClass().initializeEmitters();
  }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): NavBarLogic { return (this._logic_class as NavBarLogic); }

}

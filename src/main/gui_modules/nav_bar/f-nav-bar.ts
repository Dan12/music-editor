import { AbstractFacade } from '../../abstracts/facade';
import { NavBarLogic } from './l-nav-bar';

import { EventManager } from '../../utils/event-manager';

import { intersectMouse } from '../../utils/math';

export class NavBarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('nav_bar', parent, 'nav');

    this.initializeLogic(new NavBarLogic(this.container));

    // initialize event emittors for the buttons that were just added
    this.logicClass().initializeEmitters();
  }

  public mouseEvent(event: JQueryMouseEventObject): boolean {
    return intersectMouse(this.container[0].getBoundingClientRect(), event);
  }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): NavBarLogic { return (this._logic_class as NavBarLogic); }

}

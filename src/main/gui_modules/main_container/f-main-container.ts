import { AbstractFacade } from '../../abstracts/facade';
import { MainContainerDraw } from './d-main-container';
import { MainContainerLogic } from './l-main-container';

import { NavBarFacade } from '../nav_bar/f-nav-bar';

/**
 * The facade for the main container.
 * It initializes and sets the necessary styles for the main gui container.
 * Contains a nav bar
 * @class MainContainerFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class MainContainerFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('main_container', parent);

    // initialize this facade's enclosed classes
    this.draw_class = new MainContainerDraw(this.container);
    this.logic_class = new MainContainerLogic();

    // add a nav bar to this container
    this.addGuiChild(new NavBarFacade($(`#${this.container}`)));
  }

}

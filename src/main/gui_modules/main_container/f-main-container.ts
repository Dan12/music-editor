import { AbstractFacade } from '../../abstracts/facade';
import { MainContainerDraw } from './d-main-container';
import { MainContainerLogic } from './l-main-container';

import { NavBarFacade } from '../nav_bar/f-nav-bar';
import { FileBrowserFacade } from '../file_browser/f-file-browser';

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

    let temp_logic = new MainContainerLogic(this.container);
    // initialize this facade's enclosed classes
    this.initializeClasses(new MainContainerDraw(this.container, temp_logic), temp_logic);

    // add a nav bar to this container
    this.addGuiChild(new NavBarFacade(this.container));
    this.addGuiChild(new FileBrowserFacade(this.container));
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return NavBarDraw
   */
  protected drawClass(): MainContainerDraw { return (this._draw_class as MainContainerDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): MainContainerLogic { return (this._logic_class as MainContainerLogic); }

}

import { AbstractFacade } from '../../abstracts/facade';
import { MainContainerLogic } from './l-main-container';

import { NavBarFacade } from '../nav_bar/f-nav-bar';
import { FileBrowserFacade } from '../file_browser/f-file-browser';
import { SoundContainerToolbarFacade } from '../sound_container_toolbar/f-sound-container-toolbar';
import { KeyboardContainerFacade } from '../keyboard_container/f-keyboard-container';

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
    this.initializeLogic(new MainContainerLogic(this.container));

    // add a nav bar to this container
    this.addGuiChild(new NavBarFacade(this.container));
    this.addGuiChild(new FileBrowserFacade(this.container));
    this.addGuiChild(new KeyboardContainerFacade(this.container));
    this.addGuiChild(new SoundContainerToolbarFacade(this.container));
  }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  protected logicClass(): MainContainerLogic { return (this._logic_class as MainContainerLogic); }

}

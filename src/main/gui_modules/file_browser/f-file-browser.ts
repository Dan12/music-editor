import { AbstractFacade } from '../../abstracts/facade';
import { FileBrowserDraw } from './d-file-browser';
import { FileBrowserLogic } from './l-file-browser';

import { DragableFileFacade } from '../dragable_file/f-dragable-file';

import { EventManager } from '../../utils/event-manager';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';

/**
 * The facade for file browser.
 * initializes the file browser and loader
 * @class FileBrowserFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class FileBrowserFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('file_browser', parent);

    let temp_logic = new FileBrowserLogic(this.container);
    // initialize this facade's enclosed classes
    this.initializeClasses(new FileBrowserDraw(this.container, temp_logic), temp_logic);

    // add 10 dragable files to this browser
    for (let i = 0; i < 10; i++)
      this.addGuiChild(new DragableFileFacade(this.container, `file name ${i} is this exactly: ${i}`));

    // initialize the subscriptions for this class
    this.initializeSubscriptions();
  }

  /**
   * subscribe to the toggle file browser event to toggle the visibility of this element
   * @method initializeSubscriptions
   */
  private initializeSubscriptions(): void {
    EventManager.subscribe(new ToggleFileBrowserEvent(this.logicClass().toggleVisibility));
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return FileBrowserDraw
   */
  protected drawClass(): FileBrowserDraw { return (this._draw_class as FileBrowserDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return FileBrowserLogic
   */
  protected logicClass(): FileBrowserLogic { return (this._logic_class as FileBrowserLogic); }
}

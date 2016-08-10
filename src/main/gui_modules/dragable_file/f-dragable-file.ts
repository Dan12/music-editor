import { AbstractFacade } from '../../abstracts/facade';
import { DragableFileLogic } from './l-dragable-file';

/**
 * The facade for dragable file.
 * listens for click and drag events on this element and release elements
 * @class DragableFileFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class DragableFileFacade extends AbstractFacade {

  constructor(parent: JQuery, name: string) {
    super('dragable_file', parent);

    // setting file button html contents
    this.container.html(name);

    // initialize this facade's enclosed classes
    this.initializeLogic(new DragableFileLogic(this.container));
  }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return DragableFileLogic
   * @protected
   */
  protected logicClass(): DragableFileLogic { return (this._logic_class as DragableFileLogic); }
}

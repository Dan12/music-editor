import { AbstractFacade } from '../../abstracts/facade';
import { DragableFileDraw } from './d-dragable-file';
import { DragableFileLogic } from './l-dragable-file';

/**
 * The facade for dragable file.
 * listens for click and drag events on this element and release elements
 * @class DragableFileFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class DragableFileFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('dragable_file', parent);

    // initialize this facade's enclosed classes
    this.initializeClasses(new DragableFileDraw(this.container), new DragableFileLogic(this.container));
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return DragableFileDraw
   */
  protected drawClass(): DragableFileDraw { return (this.draw_class as DragableFileDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return DragableFileLogic
   */
  protected logicClass(): DragableFileLogic { return (this.logic_class as DragableFileLogic); }
}

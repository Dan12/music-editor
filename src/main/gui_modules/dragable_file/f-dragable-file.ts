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

  constructor(parent: JQuery, name: string) {
    super('dragable_file', parent);

    // setting file button html contents
    this.container.html(name);

    let temp_logic = new DragableFileLogic(this.container);

    // initialize this facade's enclosed classes
    this.initializeClasses(new DragableFileDraw(this.container, temp_logic), temp_logic);
  }

  /**
   * the way to access this class's draw_class
   * @method drawClass
   * @return DragableFileDraw
   */
  protected drawClass(): DragableFileDraw { return (this._draw_class as DragableFileDraw); }

  /**
   * the way to access this class's logic_class
   * @method logicClass
   * @return DragableFileLogic
   */
  protected logicClass(): DragableFileLogic { return (this._logic_class as DragableFileLogic); }
}

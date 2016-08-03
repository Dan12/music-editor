import { AbstractDraw } from '../../abstracts/draw';
import { DragableFileLogic } from './l-dragable-file';

/**
 * --- optional, some style ---
 * @property dragable_file_style
 * @for DragableFileDraw
 */
const dragable_file_style = '\
background-color: white; \
margin: 8px; \
padding: 5px 0; \
height: 30px; \
font-size: 100%; \
border-radius: 2px; \
cursor: -moz-grab; cursor: -webkit-grab; cursor: grab; \
overflow: hidden; \
';

/**
 * This class draws the elements for dragable file
 * --- some description ---
 * @class DragableFileDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class DragableFileDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: DragableFileLogic) {
    super(container, logic_class, dragable_file_style);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return DragableFileLogic
   */
  private logicClass(): DragableFileLogic { return (this._logic_class as DragableFileLogic); }
}

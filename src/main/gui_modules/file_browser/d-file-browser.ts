import { AbstractDraw } from '../../abstracts/draw';
import { FileBrowserLogic } from './l-file-browser';

/**
 * --- optional, some style ---
 * @property file_browser_style
 * @for FileBrowserDraw
 */
const file_browser_style = '\
width: 0; \
height: 85%; \
position: relative; \
padding: 0; \
background-color: rgb(220,220,220); \
overflow-y: scroll; \
display: inline-block; \
';

/**
 * This class draws the elements for file browser
 * --- some description ---
 * @class FileBrowserDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class FileBrowserDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: FileBrowserLogic) {
    super(container, logic_class, file_browser_style);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return FileBrowserLogic
   */
  private logicClass(): FileBrowserLogic { return (this._logic_class as FileBrowserLogic); }
}

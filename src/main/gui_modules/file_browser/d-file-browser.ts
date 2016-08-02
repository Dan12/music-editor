import { AbstractDraw } from '../../abstracts/draw';

/**
 * --- optional, some style ---
 * @property file_browser_style
 * @for FileBrowserDraw
 */
const file_browser_style = '\
width: 200px; \
height: 85%; \
padding: 4px; \
background-color: rgb(220,220,220); \
';

/**
 * This class draws the elements for file browser
 * --- some description ---
 * @class FileBrowserDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class FileBrowserDraw extends AbstractDraw {

  constructor(container: string) {
    super(container);
  }

  public initialize(): void {
    this.setStyle(file_browser_style);
    // this.container.append('--- some element ---');
  }
}

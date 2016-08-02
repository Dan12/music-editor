import { AbstractDraw } from '../../abstracts/draw';

/**
 * --- optional, some style ---
 * @property dragable_file_style
 * @for DragableFileDraw
 */
const dragable_file_style = '\
background-color: white; \
margin: 4px 8px; \
height: 40px; \
border-radius: 2px; \
';

/**
 * This class draws the elements for dragable file
 * --- some description ---
 * @class DragableFileDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class DragableFileDraw extends AbstractDraw {

  constructor(container: string) {
    super(container);
  }

  public initialize(): void {
    this.setStyle(dragable_file_style);
    // this.container.append('--- some element ---');
  }
}

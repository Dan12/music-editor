import { AbstractDraw } from '../../abstracts/draw';
import { MainContainerLogic } from './l-main-container';

/**
 * @property main_container_style
 * @for MainContainerDraw
 */
const main_container_style = '\
width: 100%; \
height: 100%; \
';

/**
 * This class draws the elements for the main container, which is just a footer
 * @class MainContainerDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class MainContainerDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: MainContainerLogic) {
    super(container, logic_class);
  }

  private logicClass(): MainContainerLogic { return (this._logic_class as MainContainerLogic); }

  public initialize(): void {
    this.setStyle(main_container_style);
  }
}

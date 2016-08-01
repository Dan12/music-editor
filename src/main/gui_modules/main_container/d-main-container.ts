import { AbstractDraw } from '../../abstracts/draw';

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

  constructor(container: string) {
    super(container);
  }

  public initialize(): void {
    this.setStyle(main_container_style);
    this.container.append(`<footer id="main_footer">Made by Daniel Weber</footer>`);
  }
}

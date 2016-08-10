import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- some description ---
 * @class KeyboardKeyLogic
 * @constructor
 */
export class KeyboardKeyLogic extends AbstractLogic {

  private dim_percentage = 0.05;

  constructor(container: JQuery) {
    super(container);

    this.setDimensions();
    $(window).resize(this.setDimensions);
  }

  private setDimensions = () => {
    let dim = window.innerWidth * this.dim_percentage;
    let tempvar = this.container.css({'width': dim + 'px', 'height': dim + 'px', 'font-size': (dim * 0.85) + 'px'});
  }
}

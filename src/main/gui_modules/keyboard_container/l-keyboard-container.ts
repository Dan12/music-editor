import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- some description ---
 * @class KeyboardContainerLogic
 * @constructor
 */
export class KeyboardContainerLogic extends AbstractLogic {

  private visibility = false;
  private animation_duration = 300;

  constructor(container: JQuery) {
    super(container);
  }

  /**
   * toggle this element's visibility by animating it up and down
   */
  public toggleVisibility = ({}): void => {
    console.log('here')
    let top_to = this.visibility ? '-100%' : '15%';
    this.visibility = !this.visibility
    this.container.animate({'top': top_to}, this.animation_duration);
  }
}

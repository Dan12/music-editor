import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- some description ---
 * @class FileBrowserLogic
 * @constructor
 */
export class FileBrowserLogic extends AbstractLogic {

  private visibility = false;
  private animation_duration = 200;

  public width = '15%';

  constructor(container: JQuery) {
    super(container);
  }

  /**
   * toggle this elements visibility by animating the width between 0 and 200
   * has to use arrow notation because this gets called by an event
   * @method toggleVisibility
   */
  public toggleVisibility = () => {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.container.animate({ 'width': this.width}, this.animation_duration);
    } else {
      this.container.animate({ 'width': '0px'}, this.animation_duration);
    }
  }
}

import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- some description ---
 * @class FileBrowserLogic
 * @constructor
 */
export class FileBrowserLogic extends AbstractLogic {

  private visibility = false;

  constructor(container: JQuery) {
    super(container);
  }

  public toggleVisibility = () => {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.container.animate({ 'width': '200px'}, 200);
    } else {
      this.container.animate({ 'width': '0px'}, 200);
    }
  }
}

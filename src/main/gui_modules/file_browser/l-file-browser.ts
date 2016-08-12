import { AbstractLogic } from '../../abstracts/logic';
import { Color } from '../../utils/color';

/**
 * --- optional, some style ---
 * @property file_browser_style
 * @for FileBrowserLogic
 */
const file_browser_style = {
  'width': '0',
  'height': '85%',
  'position': 'relative',
  'padding': '0',
  'background-color': Color.gray2(),
  'overflow-y': 'scroll',
  'display': 'inline-block',
  'float': 'left'
};

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
    super(container, file_browser_style);
  }

  /**
   * toggle this elements visibility by animating the width between 0 and 200
   * has to use arrow notation because this gets called by an event
   * @method toggleVisibility
   */
  public toggleVisibility = () => {
    this.visibility = !this.visibility;
    let width_to = this.visibility ? this.width : '0px';
    this.container.animate({'width': width_to}, this.animation_duration, () => { $(window).resize(); });
  }
}

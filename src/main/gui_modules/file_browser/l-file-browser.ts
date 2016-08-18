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
 * The file browser container
 * @class FileBrowserLogic
 * @constructor
 */
export class FileBrowserLogic extends AbstractLogic {

  /**
   * flag to check if this object is visible or not
   * @property visibility
   * @type boolean
   * @default false
   */
  private visibility = false;

  /**
   * the duration in milliseconds for an animation
   * @property animation_duration
   * @type number
   * @default 200
   */
  private animation_duration = 200;

  /**
   * the width of this element when visible
   * @property width
   * @type string
   * @default '15%'
   */
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

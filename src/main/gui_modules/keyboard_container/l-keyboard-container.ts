import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property keyboard_container_style
 * @for KeyboardContainerLogic
 */
const keyboard_container_style = {
  'height': '100%',
  'display': 'inline-block',
  'width': '100%',
  'text-align': 'center',
  'position': 'relative'
};

/**
 * The logic for the keyboard container, controlls visibility toggle
 * @class KeyboardContainerLogic
 * @constructor
 */
export class KeyboardContainerLogic extends AbstractLogic {

  private visibility = false;
  private animation_duration = 300;

  constructor(container: JQuery) {
    super(container, keyboard_container_style);

    this.container.css('top', this.visibility ? '0' : '-100%');

    this.toggleVisibility();
  }

  /**
   * toggle this element's visibility by animating it up and down
   */
  public toggleVisibility = (): void => {
    let top_to = this.visibility ? '-100%' : '0';
    this.visibility = !this.visibility;
    this.container.animate({'top': top_to}, this.animation_duration);
  }
}

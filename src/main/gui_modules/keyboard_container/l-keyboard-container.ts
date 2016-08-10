import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property keyboard_container_style
 * @for KeyboardContainerLogic
 */
const keyboard_container_style = {
'height': '85%',
'width': '79%',
'display': 'inline-block',
'position': 'absolute',
'text-align': 'center',
'padding': '3%'
};

/**
 * --- some description ---
 * @class KeyboardContainerLogic
 * @constructor
 */
export class KeyboardContainerLogic extends AbstractLogic {

  private visibility = true;
  private animation_duration = 300;

  constructor(container: JQuery) {
    super(container, keyboard_container_style);
  }

  /**
   * toggle this element's visibility by animating it up and down
   */
  public toggleVisibility = ({}): void => {
    let top_to = this.visibility ? '-100%' : '15%';
    this.visibility = !this.visibility;
    this.container.animate({'top': top_to}, this.animation_duration);
  }
}

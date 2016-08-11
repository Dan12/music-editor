import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property keyboard_container_style
 * @for KeyboardContainerLogic
 */
const keyboard_container_style = {
  'height': '85%',
  'display': 'inline-block',
  'position': 'absolute',
  'text-align': 'center',
  'padding': '3% 0'
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

    this.container.css('top', this.visibility ? '15%' : '-100%');

    this.setWidth();
    $(window).resize(this.setWidth);
  }

  public setWidth = (): void  => {
    let left = this.container[0].getBoundingClientRect().left;
    this.container.animate({'width': (window.innerWidth - left) + 'px'}, 100);
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

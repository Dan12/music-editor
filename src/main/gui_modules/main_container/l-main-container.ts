import { AbstractLogic } from '../../abstracts/logic';

/**
 * Controls the general actions that happen on the page and only changes overarching elements.
 * @class MainContainerLogic
 * @constructor
 */
export class MainContainerLogic extends AbstractLogic {

  /**
   * the percent of the view height that should be the body font size
   * @property font_size_percent
   * @type float
   */
  private font_size_percent = 0.04;

  constructor() {
    super();

    this.initializeResize();
  }

  /**
   * Initialize the resizing logic by setting the font size and listening for window resizes
   * @method initializeResize
   * @private
   */
  private initializeResize(): void {
    this.setFontSize();
    $(window).resize(() => {
      this.setFontSize();
    });
  }

  /**
   * Set the body font size based on the window height and the font_size_percent
   * @method setFontSize
   * @private
   */
  private setFontSize(): void {
    $('body').css('font-size', (window.innerHeight * this.font_size_percent) + 'px');
  }
}

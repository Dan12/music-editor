import { AbstractLogic } from '../../abstracts/logic';

import { EventManager } from '../../utils/event-manager';
import { ToggleFileBrowserEvent } from '../../events/toggle-file-browser';
import { ToggleKeyboardEvent } from '../../events/toggle-keyboard';
import { Color } from '../../utils/color';

/**
 * @property nav_bar_style
 * @for NavBarLogic
 */
const nav_bar_style = {
  'background-color': Color.gray1(),
  'width': '100%',
  'height': '15%'
};

/**
 * Listens for clicks on its buttons and fires events
 * @class NavBarLogic
 * @constructor
 */
export class NavBarLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container, nav_bar_style);

    this.initializeGUI();
  }

  /**
   * add two buttons to the nav bar
   * @method initializeGUI
   * @private
   */
  private initializeGUI(): void {
    this.addButton('toggle_file_browser', 'Toggle File Browser');
    this.addButton('toggle_keyboard', 'Toggle Keyboard');
  }

  /**
   * add a button element to this container
   * @method addButton
   * @ param id {string} the id of the button
   * @param text {string} the button's text
   * @private
   */
  private addButton(id: string, text: string): void {
    this.container.append(`<button id="${id}" class="vertical_align">${text}</button>`);
  }

  /**
   * initialize the event emmiteres for the nav bar.
   * Fire an event when the expand file browser button is clicked
   * @method initializeEmitters
   */
  public initializeEmitters(): void {
    $('#toggle_file_browser').click(function(){
      EventManager.fireEvent((new ToggleFileBrowserEvent()).setPayload({}));
    });

    $('#toggle_keyboard').click(function(){
      EventManager.fireEvent((new ToggleKeyboardEvent()).setPayload({}));
    });
  }
}

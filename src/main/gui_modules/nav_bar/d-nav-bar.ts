import { AbstractDraw } from '../../abstracts/draw';
import { NavBarLogic } from './l-nav-bar';

const nav_bar_style = '\
background-color: rgb(230,230,230); \
width: 100%; \
height: 15%; \
';

/**
 * sets this container's style and abstracts adding a button
 * @class NavBarDraw
 * @constructor
 */
export class NavBarDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: NavBarLogic) {
    super(container, logic_class, nav_bar_style);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  private logicClass(): NavBarLogic { return (this._logic_class as NavBarLogic); }

  /**
   * add a button element to this container
   * @method addButton
   * @ param id {string} the id of the button
   * @param text {string} the button's text
   */
  public addButton(id: string, text: string): void {
    this.container.append(`<button id="${id}" class="vertical_align">${text}</button>`);
  }
}

import { AbstractDraw } from '../../abstracts/draw';
import { NavBarLogic } from './l-nav-bar';

const nav_bar_style = '\
background-color: rgb(230,230,230); \
width: 100%; \
height: 15%; \
';

export class NavBarDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: NavBarLogic) {
    super(container, logic_class);
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  private logicClass(): NavBarLogic { return (this._logic_class as NavBarLogic); }

  /**
   * initialize this gui element with styles and additional elements
   */
  public initialize(): void {
    this.setStyle(nav_bar_style);
  }

  public addButton(id: string, text: string): void {
    this.container.append(`<button id="${id}">${text}</button>`);
  }
}

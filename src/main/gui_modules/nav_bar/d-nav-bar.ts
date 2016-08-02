import { AbstractDraw } from '../../abstracts/draw';

const nav_bar_style = '\
background-color: rgb(230,230,230); \
width: 100%; \
height: 15%; \
';

export class NavBarDraw extends AbstractDraw {

  constructor(container: string) {
    super(container);
  }

  public initialize(): void {
    this.setStyle(nav_bar_style);
  }

  public addButton(id: string, text: string): void {
    this.container.append(`<button id="${id}">${text}</button>`);
  }
}

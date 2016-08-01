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
    this.container.append('<button id="expand_file_browser">Expand File Browser</button>');
    this.container.append('<button id="toggle_keyboard">Show Keyboard</button>');
  }
}

import { AbstractDraw } from './draw';
import { AbstractLogic } from './logic';

export abstract class AbstractFacade {
  /**
   * this facade's draw class
   * @property draw_class
   * @type AbstractDraw
   * @default undefined
   */
  protected draw_class: AbstractDraw = undefined;

  /**
   * this facade's logic class
   * @property logic_class
   * @type AbstractLogic
   * @default undefined
   */
  protected logic_class: AbstractLogic = undefined;

  /**
   * this facade's gui children
   * @property gui_children
   * @type AbstractFacade[]
   * @default []
   */
  protected gui_children: AbstractFacade[] = [];

  /**
   * this facade's html container id
   * @property container
   * @type string
   * @default undefined
   */
  protected container: string = undefined;

  /**
   * this facade's parent html element
   * @property parent
   * @type JQuery
   * @default undefined
   */
  protected parent: JQuery = undefined;

  /**
   * The abstract facade class
   * @class AbstractFacade
   * @constructor
   * @param container {string} the html container id for this gui element
   * @param parent {JQuery} the parent html element for this element
   * @param [html_type='div'] {string} the optional html tag to give this gui element
   */
  constructor(container: string, parent: JQuery, html_type?: string) {
    this.container = container;
    this.parent = parent;

    // appends the container for this gui element to the specified parent
    let type = (html_type === undefined ? 'div' : html_type);
    parent.append(`<${type} id="${this.container}"></${type}>`);
  }

  /**
   * initialize this element's children and then initialize this element's gui
   * @method initializeGui
   */
  public initializeGui(): void {
    // initialize all the children first because then you can prepend and append those elements
    for (let i = 0; i < this.gui_children.length; i++) {
        this.gui_children[i].initializeGui();
    }

    this.draw_class.initialize();
  }

  /**
   * redrawing of custom canvas elements sent down the heirarchy
   * @method redraw
   */
  public redraw(): void {
    this.draw_class.redraw();
  }

  /**
   * add a child to this container
   * @method addGuiChild
   * @param facade {AbstractFacade} the gui element to add as a child of this element
   */
  protected addGuiChild(facade: AbstractFacade): void {
    this.gui_children.push(facade);
  }
}

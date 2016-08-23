import { AbstractLogic } from './logic';

export abstract class AbstractFacade {

  /**
   * this facade's logic class
   * set to type any to allow custom methods
   * @property _logic_class
   * @type AbstractLogic
   * @default undefined
   */
  protected _logic_class: any = undefined;

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
   * @type JQuery
   * @default undefined
   */
  protected container: JQuery = undefined;

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
    let type = (html_type === undefined ? 'div' : html_type);

    this.container = $(`<${type} id="${container}"></${type}>`);
    this.parent = parent;

    // appends the container for this gui element to the specified parent

    parent.append(this.container);
  }

  protected initializeLogic(logic_class: AbstractLogic): void {
    this._logic_class = logic_class;
  }

  /**
   * add a child to this container
   * @method addGuiChild
   * @param facade {AbstractFacade} the gui element to add as a child of this element
   */
  protected addGuiChild(facade: AbstractFacade): void {
    this.gui_children.push(facade);
  }

  /**
   * Propegates a click event down the gui heirarchy
   * @method mouseEvent
   * @param event {JQueryEventObject} the click event object
   * @return boolean
   */
  public mouseEvent(event: JQueryMouseEventObject): boolean {
    for (let i = 0; i < this.gui_children.length; i++) {
      if (this.gui_children[i].mouseEvent(event))
        return true;
    }
    return false;
  }

  /**
   * Propegates a click event down the gui heirarchy
   * @method keyEvent
   * @param event {JQueryMouseEventObject} the click event object
   * @return boolean
   */
  public keyEvent(event: JQueryKeyEventObject): boolean {
    for (let i = 0; i < this.gui_children.length; i++) {
      if (this.gui_children[i].keyEvent(event))
        return true;
    }
    return false;
  }

  /**
   * the way to access this facade's logic class
   * @method logicClass
   * @protected
   */
  protected abstract logicClass(): any;
}

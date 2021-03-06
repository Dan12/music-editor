import { AbstractLogic } from './logic';

export abstract class AbstractDraw {
  /**
   * the JQuery element that is this gui element
   * @property container
   * @type JQuery
   * @default undefined
   */
  protected container: JQuery = undefined;

  /**
   * access the logic class which holds the state of this draw class
   * @property _logic_class
   * @type AbstractLogic
   * @default undefined
   */
  protected _logic_class: any = undefined;

  /**
   * create the jquery object for this object's container.
   * Style it according to the rules in the constructor
   * @class AbstractDraw
   * @param container {JQuery} this elements id
   */
  constructor(container: JQuery, logic_class: AbstractLogic, style: Object) {
    this.container = container;

    this.setStyle(style);
  }

  /**
   * initialize this element's html
   * @method initialize
   */
  // abstract initialize(): void;

  /**
   * @method setStyle
   * @protected
   * @param style {string} the css style for this element as a string
   * @example
   *     this.setStyle('font-size: 10px; color: red;')
   */
  protected setStyle(style: Object): void {
    this.container.css(style);
  }

  /**
   * redraw method for canvases
   * @method redraw
   */
  public redraw(): void {
    // no redrawing
  }
}

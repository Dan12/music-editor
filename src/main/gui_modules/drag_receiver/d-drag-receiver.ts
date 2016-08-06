import { AbstractDraw } from '../../abstracts/draw';
import { DragReceiverLogic } from './l-drag-receiver';

/**
 * @property drag_receiver_style
 * @for DragReceiverDraw
 */
const drag_receiver_style = '\
background-color: rgb(220,120,120); \
width: 200px; \
padding: 4px 8px; \
text-align: center; \
max-height: 160px; \
overflow-y: scroll; \
position: absolute; \
bottom: 0px; \
display: inline-block; \
';

/**
 * This class draws the elements for drag receiver
 * --- some description ---
 * @class DragReceiverDraw
 * @constructor
 * @param container {string} the container id for this class
 */
export class DragReceiverDraw extends AbstractDraw {

  constructor(container: JQuery, logic_class: DragReceiverLogic) {
    super(container, logic_class, drag_receiver_style);

    this.container.append('<p id="prompt" style="margin: 0;">Drop Here</p>');
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return NavBarLogic
   */
  private logicClass(): DragReceiverLogic { return (this._logic_class as DragReceiverLogic); }
}

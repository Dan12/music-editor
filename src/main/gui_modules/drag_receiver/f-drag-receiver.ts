import { AbstractFacade } from '../../abstracts/facade';
import { DragReceiverDraw } from './d-drag-receiver';
import { DragReceiverLogic } from './l-drag-receiver';

import { EventManager } from '../../utils/event-manager';
import { ReleaseFileEvent, FilePayload } from '../../events/release-file';

/**
 * The facade for drag receiver.
 * will listen for mouse released dragable file with payload
 * @class DragReceiverFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class DragReceiverFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('drag_receiver', parent);

    let temp_logic = new DragReceiverLogic(this.container);

    // initialize this facade's enclosed classes
    this.initializeClasses(new DragReceiverDraw(this.container, temp_logic), temp_logic);

    EventManager.subscribe(new ReleaseFileEvent(this.recieveFile));
  }

  public recieveFile = (obj: FilePayload) => {
    this.logicClass().receiveFile(obj);
  }

  /**
   * the way to access this class's _draw_class
   * @method drawClass
   * @return DragReceiverDraw
   */
  protected drawClass(): DragReceiverDraw { return (this._draw_class as DragReceiverDraw); }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return DragReceiverLogic
   */
  protected logicClass(): DragReceiverLogic { return (this._logic_class as DragReceiverLogic); }
}

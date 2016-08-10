import { AbstractFacade } from '../../abstracts/facade';
import { DragReceiverLogic } from './l-drag-receiver';

import { EventManager } from '../../utils/event-manager';
import { ReleaseFileEvent } from '../../events/release-file';
import { DragFileEvent } from '../../events/drag-file';

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

    // initialize this facade's enclosed classes
    this.initializeLogic(new DragReceiverLogic(this.container));

    EventManager.subscribe(new ReleaseFileEvent(this.logicClass().receiveFile));
    EventManager.subscribe(new DragFileEvent(this.logicClass().dragableFileDragged));
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return DragReceiverLogic
   * @protected
   */
  protected logicClass(): DragReceiverLogic { return (this._logic_class as DragReceiverLogic); }
}

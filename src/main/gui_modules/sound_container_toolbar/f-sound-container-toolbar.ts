import { AbstractFacade } from '../../abstracts/facade';
import { SoundContainerToolbarLogic } from './l-sound-container-toolbar';
import { EventManager } from '../../utils/event-manager';
import { KeySelectedEvent } from '../../events/key-selected';

import { DragReceiverFacade } from '../drag_receiver/f-drag-receiver';

/**
 * The facade for sound container toolbar.
 * --- Some description here ---
 * @class SoundContainerToolbarFacade
 * @constructor
 * @param parent {JQuery} the parent element for this object
 */
export class SoundContainerToolbarFacade extends AbstractFacade {

  constructor(parent: JQuery) {
    super('sound_container_toolbar', parent);

    // initialize this facade's enclosed classes
    this.initializeLogic(new SoundContainerToolbarLogic(this.container));

    this.addGuiChild(new DragReceiverFacade(this.container));

    EventManager.subscribe(new KeySelectedEvent(this.logicClass().keySelected));
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return SoundContainerToolbarLogic
   * @protected
   */
  protected logicClass(): SoundContainerToolbarLogic { return (this._logic_class as SoundContainerToolbarLogic); }
}

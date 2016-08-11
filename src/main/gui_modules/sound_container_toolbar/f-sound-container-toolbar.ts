import { AbstractFacade } from '../../abstracts/facade';
import { SoundContainerToolbarLogic } from './l-sound-container-toolbar';

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

    let temp_logic = new SoundContainerToolbarLogic(this.container);

    // initialize this facade's enclosed classes
    this.initializeLogic(new SoundContainerToolbarLogic(this.container));
  }

  /**
   * the way to access this class's _logic_class
   * @method logicClass
   * @return SoundContainerToolbarLogic
   * @protected
   */
  protected logicClass(): SoundContainerToolbarLogic { return (this._logic_class as SoundContainerToolbarLogic); }
}

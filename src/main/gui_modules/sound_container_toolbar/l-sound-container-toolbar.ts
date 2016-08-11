import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property sound_container_toolbar_style
 * @for SoundContainerToolbarLogic
 */
const sound_container_toolbar_style = {
  'background-color': 'rgb(150,150,150)',
  'position': 'relative',
  'height': '18%',
  'width': '100%',
  'display': 'inline-block',
}

/**
 * --- some description ---
 * @class SoundContainerToolbarLogic
 * @constructor
 */
export class SoundContainerToolbarLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container, sound_container_toolbar_style);
  }
}

import { AbstractLogic } from '../../abstracts/logic';

/**
 * --- optional, some style ---
 * @property sound_container_toolbar_style
 * @for SoundContainerToolbarLogic
 */
const sound_container_toolbar_style = {
  'background-color': 'rgb(150,150,150)',
  'position': 'relative',
  'top': '-17.9%',
  'height': '18%',
  'width': '100%',
  'display': 'inline-block',
};

/**
 * --- some description ---
 * @class SoundContainerToolbarLogic
 * @constructor
 */
export class SoundContainerToolbarLogic extends AbstractLogic {

  constructor(container: JQuery) {
    super(container, sound_container_toolbar_style);

    this.container.html('<h1 style="margin:0;">HI</h1>')

    $('#file_browser').resize(function(){
      console.log('resized file browser')
    })
  }
}

// import Howl class
import { Howl } from 'howler';

/**
 * This class encapsulates a howler object and exposes a simple api
 * @class HowlSound
 * @constructor
 * @param fileName {string} the name of the audio file
 * @param loop {boolean} flag to loop the sound or not
 */
export class HowlSound {

  /**
   * a Howler js object
   * @property howlObj
   * @type Howl
   * @defaul undefined
   */
  private howlObj: Howl = undefined;

  /**
   * is the current sound playing, used in the {{#crossLink "HowlSound/toggle:method"}}{{/crossLink}} method
   * @property isPlaying
   * @type boolean
   * @defaul false
   */
  private isPlaying: boolean = false;

  public constructor(fileName: string, loop: boolean = true) {

    this.howlObj = new Howl({
      urls: [fileName],
      loop: loop
    });
  }

  /**
   * Toggles the sound to play
   * @method toggle
   */
  public toggle(): void {
    if (!this.isPlaying) {
      console.log('playing');
      this.howlObj.play();
      this.isPlaying = true;
    } else {
      console.log('stopping');
      this.howlObj.stop();
      this.isPlaying = false;
    }
  }

}

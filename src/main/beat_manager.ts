/**
 * The manages the current beat for playback and quaternization
 * @class BeatManager
 * @static
 */
export class BeatManager {

  /**
   * the current global beat
   * @property global_beat_at
   * @type number
   * @default 0
   */
  static global_beat_at = 0;

  /**
   * the current global beats per minute
   * @property global_bpm
   * @type number
   * @default 0
   */
  static global_bpm = 0;

  /**
   * the interval function for updating the beat
   * @property interval_function
   * @type number
   * @default undefined
   */
  static interval_function: number = undefined;

  /**
   * sets the global bpm
   * @method setBpm
   * @param bpm {number} the bpm to set the global bpm to
   */
  static setBpm(bpm: number): void {
    BeatManager.global_bpm = bpm;
  }

  /**
   * start the beat interval if not already started
   * @method startBeat
   */
  static startBeat(): void {
    if (BeatManager.interval_function === undefined) {
      let start_time = new Date().getTime();

      let beats_per_millisecond = BeatManager.global_bpm / 60000;

      BeatManager.interval_function = setInterval(function() {
        BeatManager.global_beat_at = beats_per_millisecond * (new Date().getTime() - start_time);
      }, 1);
    } else {
      console.log('The beat manager was already started. This may be a bug.');
    }
  }

  /**
   * stop the beat interval and set the interval to undefined
   * @method stopBeat
   */
  public stopBeat(): void {
    clearInterval(BeatManager.interval_function);
    BeatManager.interval_function = undefined;
  }

}

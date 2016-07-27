define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * The manages the current beat for playback and quaternization
     * @class BeatManager
     * @static
     */
    var BeatManager = (function () {
        function BeatManager() {
        }
        /**
         * sets the global bpm
         * @method setBpm
         * @param bpm {number} the bpm to set the global bpm to
         */
        BeatManager.setBpm = function (bpm) {
            BeatManager.global_bpm = bpm;
        };
        /**
         * start the beat interval if not already started
         * @method startBeat
         */
        BeatManager.startBeat = function () {
            if (BeatManager.interval_function === undefined) {
                var start_time_1 = new Date().getTime();
                var beats_per_millisecond_1 = BeatManager.global_bpm / 60000;
                BeatManager.interval_function = setInterval(function () {
                    BeatManager.global_beat_at = beats_per_millisecond_1 * (new Date().getTime() - start_time_1);
                }, 1);
            }
            else {
                console.log('The beat manager was already started. This may be a bug.');
            }
        };
        /**
         * stop the beat interval and set the interval to undefined
         * @method stopBeat
         */
        BeatManager.prototype.stopBeat = function () {
            clearInterval(BeatManager.interval_function);
            BeatManager.interval_function = undefined;
        };
        /**
         * the current global beat
         * @property global_beat_at
         * @type number
         * @default 0
         */
        BeatManager.global_beat_at = 0;
        /**
         * the current global beats per minute
         * @property global_bpm
         * @type number
         * @default 0
         */
        BeatManager.global_bpm = 0;
        /**
         * the interval function for updating the beat
         * @property interval_function
         * @type number
         * @default undefined
         */
        BeatManager.interval_function = undefined;
        return BeatManager;
    }());
    exports.BeatManager = BeatManager;
});

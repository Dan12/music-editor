define(["require", "exports"], function (require, exports) {
    "use strict";
    // keeps track of the current beat
    var BeatManager = (function () {
        function BeatManager() {
        }
        BeatManager.prototype.setBpm = function (bpm) {
            BeatManager.global_bpm = bpm;
        };
        BeatManager.prototype.startBeat = function () {
            if (this.interval_function == null) {
                var start_time_1 = new Date().getTime();
                var beats_per_millisecond_1 = BeatManager.global_bpm / 60000;
                this.interval_function = setInterval(function () {
                    BeatManager.global_beat_at = beats_per_millisecond_1 * (new Date().getTime() - start_time_1);
                }, 1);
            }
        };
        BeatManager.prototype.stopBeat = function () {
            clearInterval(this.interval_function);
            this.interval_function = null;
        };
        BeatManager.global_beat_at = 0;
        BeatManager.global_bpm = 0;
        return BeatManager;
    }());
    exports.BeatManager = BeatManager;
});

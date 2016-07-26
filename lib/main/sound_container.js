define(["require", "exports", './sound'], function (require, exports, sound_1) {
    "use strict";
    // a container that represents a single sound but with potentially mutliple pitches
    var SoundContainer = (function () {
        function SoundContainer(sounds, looped, quaternize, hold_to_play) {
            this.pitches = new Array();
            this.looped = looped;
            this.quaternize = quaternize;
            this.hold_to_play = hold_to_play;
            this.pitch_at = 0;
            for (var i = 0; i < sounds.length; i++)
                this.pitches.push(new sound_1.Sound(sounds[i], this.looped));
        }
        SoundContainer.prototype.play = function () {
            // play the current sound and prep the next one
        };
        return SoundContainer;
    }());
    exports.SoundContainer = SoundContainer;
});

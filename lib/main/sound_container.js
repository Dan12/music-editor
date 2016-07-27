define(["require", "exports", './sound'], function (require, exports, sound_1) {
    "use strict";
    /**
     * a container that represents a single sound but with potentially mutliple pitches
     * @class SoundContainer
     * @constructor
     * @param sounds {string[]} a string array of the file path of sounds
     * @param looped {boolean} have the sound be looped
     * @param hold_to_play {boolean} do you have to hold down the key for the sound to play
     * @param [quaternize = 0] {number} the quaternization number
     */
    var SoundContainer = (function () {
        function SoundContainer(sounds, looped, hold_to_play, quaternize) {
            if (quaternize === void 0) { quaternize = 0; }
            /**
             * array of class {{#crossLink "Sound"}}{{/crossLink}}
             * @property pitches
             * @type sound[]
             * @default undefined
             */
            this.pitches = undefined;
            /**
             * loop the sound, stop the sound when the key is pressed again
             * @property looped
             * @type boolean
             * @default false
             */
            this.looped = false;
            /**
             * quaternization
             * only play sound at next interval given by number (0-no quaternize, 1/4-play on next quater beat)
             * min: 1/64, max: 32
             * @property quaternize
             * @type number
             * @default 0
             */
            this.quaternize = 0;
            /**
             * hold to play, hold down the key to play the sound
             * the sound stops when the key is released
             * if false, the sound will play all the way through, even if the key is released
             * @property hold_to_play
             * @type boolean
             * @default false
             */
            this.hold_to_play = false;
            this.pitch_at = 0;
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

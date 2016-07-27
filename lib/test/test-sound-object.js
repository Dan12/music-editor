define(["require", "exports", 'howler'], function (require, exports, howler_1) {
    "use strict";
    /**
     * This class encapsulates a howler object and exposes a simple api
     * @class HowlSound
     * @constructor
     * @param fileName {string} the name of the audio file
     * @param loop {boolean} flag to loop the sound or not
     */
    var HowlSound = (function () {
        function HowlSound(fileName, loop) {
            if (loop === void 0) { loop = true; }
            /**
             * a Howler js object
             * @property howlObj
             * @type Howl
             * @defaul undefined
             */
            this.howlObj = undefined;
            /**
             * is the current sound playing, used in the {{#crossLink "HowlSound/toggle:method"}}{{/crossLink}} method
             * @property isPlaying
             * @type boolean
             * @defaul false
             */
            this.isPlaying = false;
            this.howlObj = new howler_1.Howl({
                urls: [fileName],
                loop: loop
            });
        }
        /**
         * Toggles the sound to play
         * @method toggle
         */
        HowlSound.prototype.toggle = function () {
            if (!this.isPlaying) {
                console.log('playing');
                this.howlObj.play();
                this.isPlaying = true;
            }
            else {
                console.log('stopping');
                this.howlObj.stop();
                this.isPlaying = false;
            }
        };
        return HowlSound;
    }());
    exports.HowlSound = HowlSound;
});

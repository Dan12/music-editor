define(["require", "exports", 'howler'], function (require, exports, howler_1) {
    "use strict";
    /**
     * A class to abstract a howl object
     * @class Sound
     * @constructor
     * @param filename {string} the filepath for the sound
     * @param looped {boolean} sound the sound loop or not
     * @param [start_time] {number} what time to start the sound at
     * @param [end_time] {number} what time to end the sound at
     */
    var Sound = (function () {
        function Sound(filename, looped, start_time, end_time) {
            /**
             * THe howler js object which this class exposes a simple api for
             * @property howl_object
             * @type Howl
             * @default undefined
             */
            this.howl_object = undefined;
            this.howl_object = new howler_1.Howl({
                urls: [filename],
                loop: looped
            });
        }
        /**
         * expose the howl object play method
         * @method play
         */
        Sound.prototype.play = function () {
            this.howl_object.play();
        };
        /**
         * expose the howl object stop method
         * @method stop
         */
        Sound.prototype.stop = function () {
            this.howl_object.stop();
        };
        return Sound;
    }());
    exports.Sound = Sound;
});

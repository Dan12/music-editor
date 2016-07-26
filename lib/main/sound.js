define(["require", "exports", 'howler'], function (require, exports, howler_1) {
    "use strict";
    // class to abstract a howl object
    var Sound = (function () {
        function Sound(filename, looped) {
            this.howlObject = new howler_1.Howl({
                urls: [filename],
                loop: looped
            });
        }
        Sound.prototype.play = function () {
            this.howlObject.play();
        };
        Sound.prototype.stop = function () {
            this.howlObject.stop();
        };
        return Sound;
    }());
    exports.Sound = Sound;
});

define(["require", "exports", 'howler'], function (require, exports, howler_1) {
    "use strict";
    var HowlSound = (function () {
        function HowlSound(fileName, loop) {
            if (loop === void 0) { loop = true; }
            this.isPlaying = false;
            this.howlObj = new howler_1.Howl({
                urls: [fileName],
                loop: loop
            });
        }
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

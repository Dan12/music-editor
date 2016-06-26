/// <reference path="../libraries/jquery.d.ts" />
/// <reference path="../libraries/howler.d.ts" />
$(document).ready(function () {
    $("#test_area").append("<p id='stuff'></p>");
    $("#test_area").append("<button id='clickMe'>Click Me</button>");
    $("#stuff").html("Lolz");
    var Sound = (function () {
        function Sound(fileName, loop) {
            if (loop === void 0) { loop = true; }
            this.isPlaying = false;
            this.howlObj = new Howl({
                urls: [fileName],
                loop: loop
            });
        }
        ;
        Sound.prototype.toggle = function () {
            if (!this.isPlaying) {
                console.log("playing");
                this.howlObj.play();
                this.isPlaying = true;
            }
            else {
                console.log("stopping");
                this.howlObj.stop();
                this.isPlaying = false;
            }
        };
        return Sound;
    }());
    var sound = new Sound("audio/kickG.wav");
    $("#clickMe").click(function () {
        sound.toggle();
        $("#stuff").toggle(300);
    });
});
//# sourceMappingURL=testMain.js.map
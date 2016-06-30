define(["require", "exports", "./testSoundObject"], function (require, exports, testSoundObject_1) {
    "use strict";
    function testUI() {
        $("#test_area").append("<p id='stuff'></p>");
        $("#test_area").append("<button id='clickMe'>Click Me</button>");
        $("#stuff").html("Lolz");
        var sound = new testSoundObject_1.HowlSound("audio/" + testFileName);
        $("#clickMe").click(function () {
            sound.toggle();
            $("#stuff").toggle(300);
            someOtherValue++;
            console.log(someOtherValue);
        });
    }
    exports.testUI = testUI;
});

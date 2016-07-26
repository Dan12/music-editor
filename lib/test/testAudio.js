define(["require", "exports", './testGetAudio', './testCallback'], function (require, exports, testGetAudio_1, testCallback_1) {
    "use strict";
    function testAudio() {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        console.log(testFileName);
        testGetAudio_1.getAudio(audioCtx, testFileName, testCallback_1.callbackFunction);
        console.log(someOtherValue);
    }
    exports.testAudio = testAudio;
});

define(["require", "exports", './test-get-audio', './test-callback'], function (require, exports, test_get_audio_1, test_callback_1) {
    "use strict";
    /**
     * This function tests the audio functions for getting an audio context
     * and getting the audio buffer of a sound using that context
     * @method testAudio
     * @for TestMain
     */
    function testAudio() {
        var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        console.log(testFileName);
        test_get_audio_1.getAudio(audioCtx, testFileName, test_callback_1.callbackFunction);
        console.log(someOtherValue);
    }
    exports.testAudio = testAudio;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * This function uses an AudioContext to get the audio file specified by the filename
     * @method getAudio
     * @for TestMain
     * @param audioCtx {AudioContext} the web audio context for this project
     * @param fileName {string} the name of the file, relative to the audio folder in the root of this project4
     * @param callback {function} the callback function to be called with the audio data after the audio has been loaded
     */
    function getAudio(audioCtx, fileName, callback) {
        var source = audioCtx.createBufferSource();
        // create a new request
        var request = new XMLHttpRequest();
        request.open('GET', "audio/" + fileName, true);
        request.responseType = 'arraybuffer';
        // define the error function of type DecodeErrorCallback
        var errorFunc;
        errorFunc = function (e) {
            console.log('Error with decoding audio data' + e.err);
        };
        request.onload = function () {
            var audioData = request.response;
            audioCtx.decodeAudioData(audioData, function (buffer) {
                source.buffer = buffer;
                source.connect(audioCtx.destination);
                // source.loop = false;
                // samplesPerSecond = buffer.sampleRate;
                callback(source);
            }, errorFunc);
        };
        request.send();
    }
    exports.getAudio = getAudio;
});

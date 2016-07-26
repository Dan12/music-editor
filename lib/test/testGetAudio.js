define(["require", "exports"], function (require, exports) {
    "use strict";
    function getAudio(audioCtx, fileName, callback) {
        var source = audioCtx.createBufferSource();
        var request = new XMLHttpRequest();
        request.open('GET', "audio/" + fileName, true);
        request.responseType = 'arraybuffer';
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

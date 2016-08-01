define(["require", "exports"], function (require, exports) {
    "use strict";
    var xZoom = 0.01;
    var yZoom = 50;
    var samplesPerSecond = 48000;
    /**
     * This function tests the callback functionality for the get-audio function
     * and extracts data from an audio buffer and displays it on the screen
     * @method callbackFunction
     * @for TestMain
     * @param sound {AudioBufferSourceNode} the web audio context node for the source of the sound to be tested
     */
    function callbackFunction(sound) {
        sound.loop = false;
        playSound(sound);
        var audioBuffer = sound.buffer;
        samplesPerSecond = sound.buffer.sampleRate;
        var buffer1 = audioBuffer.getChannelData(0);
        var buffer2 = audioBuffer.getChannelData(1);
        $('#test_area').append('<canvas id="test_canvas" width=400 height=400>The canvas element is not supported on your browser</canvas>');
        var c = document.getElementById('test_canvas');
        $('#test_area').append('<p>Mouse at: <b id="mouseLocation">0.00</b> seconds</p>');
        var ctx = c.getContext('2d');
        ctx.lineWidth = 1;
        ctx.moveTo(0, 50);
        // pixels per sample
        xZoom = c.width / buffer1.length;
        for (var i = 1; i < buffer1.length + 1; i++)
            ctx.lineTo(i * xZoom, 50 - buffer1[i] * yZoom);
        ctx.stroke();
        ctx.moveTo(0, 150);
        for (var i = 1; i < buffer1.length + 1; i++)
            ctx.lineTo(i * xZoom, 150 - buffer2[i] * yZoom);
        ctx.stroke();
        $('#test_canvas').mousemove(function (event) {
            $('#mouseLocation').html(String(((event.pageX - $('#test_canvas').offset().left) / (xZoom * samplesPerSecond)).toFixed(4)));
        });
    }
    exports.callbackFunction = callbackFunction;
    /**
     * This function plays the sound from the given input
     * @method playSound
     * @for TestMain
     * @param sound {AudioBufferSourceNode} the web audio context node for the source of the sound to be tested
     */
    var playSound = function (source) {
        console.log('A callback');
        // delay, offset, [length]
        source.start(0, 0.006);
        setTimeout(function () {
            source.stop(0);
            console.log('Stopped');
        }, 1000);
    };
});

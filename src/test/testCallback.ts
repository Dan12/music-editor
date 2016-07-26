let xZoom = 0.01;
let yZoom = 50;
let samplesPerSecond = 48000;

export function callbackFunction(sound: AudioBufferSourceNode) {

    sound.loop = false;

    playSound(sound);

    let audioBuffer = sound.buffer;

    samplesPerSecond = sound.buffer.sampleRate;

    let buffer1: Float32Array = audioBuffer.getChannelData(0);
    let buffer2: Float32Array = audioBuffer.getChannelData(1);

    let c = document.getElementById('test_canvas');
    $('#test_area').append('<p>Mouse at: <b id="mouseLocation">0.00</b> seconds</p>');
    let ctx = c.getContext('2d');
    ctx.moveTo(0, 50);

    // pixels per sample
    xZoom = c.width / buffer1.length;

    for (let i = 1; i < buffer1.length + 1; i++)
        ctx.lineTo(i * xZoom, 50 - buffer1[i] * yZoom);

    ctx.stroke();

    ctx.moveTo(0, 150);

    for (let i = 1; i < buffer1.length + 1; i++)
        ctx.lineTo(i * xZoom, 150 - buffer2[i] * yZoom);

    ctx.stroke();

    $('#test_canvas').mousemove(function(event) {
        $('#mouseLocation').html(
            String(
                ((event.pageX - $('#test_canvas').offset().left) / (xZoom * samplesPerSecond)).toFixed(4)
            )
        );
    });

}

let playSound = function(source: AudioBufferSourceNode){
    console.log('A callback');
    // delay, offset, length
    source.start(0, 0.006);

    setTimeout(function(){
          source.stop(0);
          console.log('Stopped');
    }, 1000);
};
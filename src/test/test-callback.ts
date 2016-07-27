let xZoom = 0.01;
let yZoom = 50;
let samplesPerSecond = 48000;

/**
 * This function tests the callback functionality for the get-audio function
 * and extracts data from an audio buffer and displays it on the screen
 * @method callbackFunction
 * @for test-main
 * @param sound {AudioBufferSourceNode} the web audio context node for the source of the sound to be tested
 */
export function callbackFunction(sound: AudioBufferSourceNode) {

  sound.loop = false;

  playSound(sound);

  let audioBuffer = sound.buffer;

  samplesPerSecond = sound.buffer.sampleRate;

  let buffer1: Float32Array = audioBuffer.getChannelData(0);
  let buffer2: Float32Array = audioBuffer.getChannelData(1);

  $('#test_area').append(
    '<canvas id="test_canvas" width=400 height=400>The canvas element is not supported on your browser</canvas>'
  );
  let c = document.getElementById('test_canvas');
  $('#test_area').append('<p>Mouse at: <b id="mouseLocation">0.00</b> seconds</p>');
  let ctx = c.getContext('2d');
  ctx.lineWidth = 1;
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

/**
 * This function plays the sound from the given input
 * @method playSound
 * @for test-main
 * @param sound {AudioBufferSourceNode} the web audio context node for the source of the sound to be tested
 */
let playSound = function(source: AudioBufferSourceNode){
  console.log('A callback');
  // delay, offset, [length]
  source.start(0, 0.006);

  setTimeout(function(){
      source.stop(0);
      console.log('Stopped');
  }, 1000);
};

/**
 * This function uses an AudioContext to get the audio file specified by the filename
 * @method getAudio
 * @for TestMain
 * @param audioCtx {AudioContext} the web audio context for this project
 * @param fileName {string} the name of the file, relative to the audio folder in the root of this project4
 * @param callback {function} the callback function to be called with the audio data after the audio has been loaded
 */
export function getAudio(
  audioCtx: AudioContext,
  fileName: string,
  callback: (sound: AudioBufferSourceNode) => void
): void {

  let source: AudioBufferSourceNode = audioCtx.createBufferSource();

  // create a new request
  let request = new XMLHttpRequest();
  request.open('GET', `audio/${fileName}`, true);
  request.responseType = 'arraybuffer';

  // define the error function of type DecodeErrorCallback
  let errorFunc: DecodeErrorCallback;
  errorFunc = function(e?: DOMException): void {
    console.log('Error with decoding audio data' + e.err);
  };

  request.onload = function(): void {
    let audioData = request.response;

    audioCtx.decodeAudioData(audioData, function(buffer: AudioBuffer) {
      source.buffer = buffer;

      source.connect(audioCtx.destination);
      // source.loop = false;
      // samplesPerSecond = buffer.sampleRate;

      callback(source);
    },

    errorFunc);

  };

  request.send();
}

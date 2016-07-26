export function getAudio(
    audioCtx: AudioContext,
    fileName: string,
    callback: (sound: AudioBufferSourceNode) => void
): void {

    let source: AudioBufferSourceNode = audioCtx.createBufferSource();

    let request = new XMLHttpRequest();

    request.open('GET', `audio/${fileName}`, true);

    request.responseType = 'arraybuffer';

    let errorFunc: DecodeErrorCallback;
    errorFunc = function(e?: DOMException) {
        console.log('Error with decoding audio data' + e.err);
    };

    request.onload = function() {
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
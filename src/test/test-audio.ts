import { getAudio }  from './test-get-audio';
import { callbackFunction } from './test-callback';

export function testAudio() {

    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    console.log(testFileName);
    getAudio(audioCtx, testFileName, callbackFunction);

    console.log(someOtherValue);
}

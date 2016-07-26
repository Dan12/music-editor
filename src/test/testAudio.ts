import { getAudio }  from './testGetAudio';
import { callbackFunction } from './testCallback';

export function testAudio() {

    let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

    console.log(testFileName);
    getAudio(audioCtx, testFileName, callbackFunction);

    console.log(someOtherValue);
}
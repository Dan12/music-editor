import { getAudio }  from './test-get-audio';
import { callbackFunction } from './test-callback';

/**
 * This function tests the audio functions for getting an audio context
 * and getting the audio buffer of a sound using that context
 * @method testAudio
 * @for TestMain
 */
export function testAudio() {

  let audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  console.log(testFileName);
  getAudio(audioCtx, testFileName, callbackFunction);

  console.log(someOtherValue);
}

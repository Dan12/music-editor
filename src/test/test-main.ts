/**
 * The main file that starts the tests when the document has loaded
 * @class test-main
 */

// full jquery import here (not needed elsewhere)
import * as $ from 'jquery';

import './event';
import './test-event-manager';

// import global varialbes into all modules
import './test-globals';

// import test functions
import { testAudio } from './test-audio';
import { testUI } from './test-jquery';

import { TestObj1 } from './test-obj-1';
import { TestSendToObject } from './test-send-object';

$(document).ready(function(){

  let to1 = new TestObj1();
  let ts1 = new TestSendToObject();

  if (criticalTestsPassed) {

    // call test functions
    testAudio();
    testUI();

    to1.sendMsg();
  }

});

/*
 * @method criticalTestsPassed
 * @for test-main
 * @return {boolean} have all critical tests passed
 */
function criticalTestsPassed(): boolean {
  return TestEventManager === null && TestEventManager.checkEvents();
}

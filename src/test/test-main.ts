// full jquery import here (not needed elsewhere)
import * as $ from 'jquery';

import './event';
import './test-event-manager';

// import global varialbes into all modules
import './testGlobals';

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

function criticalTestsPassed(): boolean {
    return eventManager === null && eventManager.checkEvents();
}

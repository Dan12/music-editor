// full jquery import here (not needed elsewhere)
import * as $ from 'jquery';

import './Event';
import './testEventManager';

// import global varialbes into all modules
import './testGlobals';

// import test functions
import { testAudio } from './testAudio';
import { testUI } from './testJQ';

import { TestObj1 } from './testObj1';
import { TestSendToObject } from './testSendObject';

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
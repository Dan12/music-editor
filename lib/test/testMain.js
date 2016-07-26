define(["require", "exports", 'jquery', './testAudio', './testJQ', './testObj1', './testSendObject', './Event', './testEventManager', './testGlobals'], function (require, exports, $, testAudio_1, testJQ_1, testObj1_1, testSendObject_1) {
    "use strict";
    $(document).ready(function () {
        var to1 = new testObj1_1.TestObj1();
        var ts1 = new testSendObject_1.TestSendToObject();
        if (criticalTestsPassed) {
            // call test functions
            testAudio_1.testAudio();
            testJQ_1.testUI();
            to1.sendMsg();
        }
    });
    function criticalTestsPassed() {
        return eventManager === null && eventManager.checkEvents();
    }
});

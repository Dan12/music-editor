/**
 * The main file that starts the tests when the document has loaded
 * @class test-main
 */
define(["require", "exports", 'jquery', './test-audio', './test-jquery', './test-obj-1', './test-send-object', './event', './test-event-manager', './test-globals'], function (require, exports, $, test_audio_1, test_jquery_1, test_obj_1_1, test_send_object_1) {
    "use strict";
    $(document).ready(function () {
        var to1 = new test_obj_1_1.TestObj1();
        var ts1 = new test_send_object_1.TestSendToObject();
        if (criticalTestsPassed) {
            // call test functions
            test_audio_1.testAudio();
            test_jquery_1.testUI();
            to1.sendMsg();
        }
    });
    /*
     * @method criticalTestsPassed
     * @for test-main
     * @return {boolean} have all critical tests passed
     */
    function criticalTestsPassed() {
        return TestEventManager === null && TestEventManager.checkEvents();
    }
});

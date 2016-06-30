define(["require", "exports", "jquery", "./testAudio", "./testJQ", "./testGlobals"], function (require, exports, $, testAudio_1, testJQ_1) {
    "use strict";
    $(document).ready(function () {
        // call test functions
        testAudio_1.testAudio();
        testJQ_1.testUI();
    });
});

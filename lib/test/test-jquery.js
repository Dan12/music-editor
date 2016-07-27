define(["require", "exports", './test-sound-object', './static-tests'], function (require, exports, test_sound_object_1, static_tests_1) {
    "use strict";
    /**
     * Test some ui stuff using jquery
     * @method testUI
     * @for test-main
     */
    function testUI() {
        $('#test_area').append('<p id="stuff"></p>');
        $('#test_area').append('<button id="clickMe">Click Me</button>');
        $('#stuff').html('Lolz');
        var sound = new test_sound_object_1.HowlSound("audio/" + testFileName);
        $('#clickMe').click(function () {
            sound.toggle();
            $('#stuff').toggle(300);
            someOtherValue++;
            console.log(someOtherValue);
        });
        static_tests_1.staticTests();
    }
    exports.testUI = testUI;
});

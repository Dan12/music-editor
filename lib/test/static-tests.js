define(["require", "exports"], function (require, exports) {
    "use strict";
    function staticTests() {
        $('#test_area').append('<p id="static_tests" style="position: relative;"></p>');
        $('#static_tests').append('<div class="box" style="width: 50px; height: 50px; border: 1px solid black;"></div>');
    }
    exports.staticTests = staticTests;
});

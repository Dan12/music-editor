define(["require", "exports"], function (require, exports) {
    "use strict";
    /**
     * This function tests static html positioning
     * @method staticTests
     * @for TestMain
     */
    function staticTests() {
        $('#test_area').append('<div id="static_tests" \
    style="width: 300px; height: 300px; border: 1px solid black; position: relative; \
    "></div>');
        $('#static_tests').append('<div id="big_box" \
    style="width: 100px; height: 100px; border: 1px solid black; position: relative; left: 50px; top: 50px; \
    "></div>');
        $('#big_box').append(smallBox(10, 10));
        $('#static_tests').append(smallBox(170, 50));
    }
    exports.staticTests = staticTests;
    ;
    /**
     * This function returns the html for a small 50 by 50 pixel box positioned abolutley at the given coordinates
     * @method smallBox
     * @for TestMain
     * @param x {number} the number of pixels for the left attribute
     * @param y {number} the number of pixels for the top attribute
     */
    function smallBox(x, y) {
        return '<div" \
          style="width: 50px; height: 50px; border: 1px solid black; position: absolute; left: ' + x + 'px; top: ' + y + 'px\
          "></div>';
    }
});

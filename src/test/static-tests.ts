/**
 * This function tests static html positioning
 * @method staticTests
 * @for test-main
 */
export function staticTests() {
  $('#test_area').append(
    '<div id="static_tests" \
    style="width: 300px; height: 300px; border: 1px solid black; position: relative; \
    "></div>'
  );

  $('#static_tests').append(smallBox(0, 0));

  $('#static_tests').append(smallBox(0, 50));
};

/**
 * This function returns the html for a small 50 by 50 pixel box positioned abolutley at the given coordinates
 * @method smallBox
 * @for test-main
 * @param x {number} the number of pixels for the left attribute
 * @param y {number} the number of pixels for the top attribute
 */
function smallBox(x: number, y: number): string {
  return '<div" \
          style="width: 50px; height: 50px; border: 1px solid black; position: absolute; left: ' + x + 'px; top: ' + y + 'px\
          "></div>';
}

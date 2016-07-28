import { TestHowlSound } from './test-sound-object';
import { staticTests } from './static-tests';

/**
 * Test some ui stuff using jquery
 * @method testUI
 * @for TestMain
 */
export function testUI(): void {

  $('#test_area').append('<p id="stuff"></p>');
  $('#test_area').append('<button id="clickMe">Click Me</button>');
  $('#stuff').html('Lolz');

  let sound: TestHowlSound = new TestHowlSound(`audio/${testFileName}`);

  $('#clickMe').click(function(){

    sound.toggle();

    $('#stuff').toggle(300);

    someOtherValue++;
    console.log(someOtherValue);
  });

  staticTests();
}

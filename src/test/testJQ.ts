import { HowlSound } from './testSoundObject';

export function testUI() {

    $('#test_area').append('<p id="stuff"></p>');
    $('#test_area').append('<button id="clickMe">Click Me</button>');
    $('#stuff').html('Lolz');

    let sound: HowlSound = new HowlSound(`audio/${testFileName}`);

    $('#clickMe').click(function(){

        sound.toggle();

        $('#stuff').toggle(300);

        someOtherValue++;
        console.log(someOtherValue);
    });
}
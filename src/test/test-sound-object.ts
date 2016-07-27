// import Howl class
import { Howl } from 'howler';

export class HowlSound {

    private howlObj: Howl;
    private isPlaying: boolean = false;

    public constructor(fileName: string, loop: boolean = true) {

        this.howlObj = new Howl({
            urls: [fileName],
            loop: loop
        });
    }

    public toggle(): void {
        if (!this.isPlaying) {
            console.log('playing');
            this.howlObj.play();
            this.isPlaying = true;
        } else {
            console.log('stopping');
            this.howlObj.stop();
            this.isPlaying = false;
        }
    }

}

// import Howl class
import { Howl } from 'howler';

// class to abstract a howl object
export class Sound {

    private howlObject: Howl;

    public constructor(filename: string, looped: boolean) {
        this.howlObject = new Howl({
            urls: [filename],
            loop: looped
        });
    }

    public play(): void {
        this.howlObject.play();
    }

    public stop(): void {
        this.howlObject.stop();
    }

}
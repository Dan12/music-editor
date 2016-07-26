import { Sound } from './sound';

// a container that represents a single sound but with potentially mutliple pitches
export class SoundContainer {

    private pitches: Sound[];
    private looped: boolean;

    // only play sound at next interval given by number (0-no quaternize, 1/4-play on next quater beat)
    // min: 1/64, max: 32
    private quaternize: number;

    private hold_to_play: boolean;
    private pitch_at: number;

    public constructor(sounds: string[], looped: boolean, quaternize: number, hold_to_play: boolean) {

        this.pitches = new Array();
        this.looped = looped;
        this.quaternize = quaternize;
        this.hold_to_play = hold_to_play;
        this.pitch_at = 0;

        for (let i = 0; i < sounds.length; i++)
            this.pitches.push(new Sound(sounds[i], this.looped));

    }

    public play() {
        // play the current sound and prep the next one
    }
}
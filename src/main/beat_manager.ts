// keeps track of the current beat
export class BeatManager {

    static global_beat_at = 0;
    static global_bpm = 0;

    private interval_function: number;

    public setBpm(bpm: number) {
        BeatManager.global_bpm = bpm;
    }

    public startBeat(): void {
        if (this.interval_function == null) {
            let start_time = new Date().getTime();

            let beats_per_millisecond = BeatManager.global_bpm / 60000;

            this.interval_function = setInterval(function() {
                BeatManager.global_beat_at = beats_per_millisecond * (new Date().getTime() - start_time);
            }, 1);
        }
    }

    public stopBeat(): void {
        clearInterval(this.interval_function);
        this.interval_function = null;
    }

}
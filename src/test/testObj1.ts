import './Event';
import { TestObjEvent } from './testObjEvent';

export class TestObj1 {
    private num: number;

    public constructor() {
        this.num = 5331341;

        eventManager.register(new TestObjEvent());
    }

    public sendMsg(): void {
        eventManager.fireEvent(new TestObjEvent(null, this));
    }

};
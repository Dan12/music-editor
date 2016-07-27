import './event';
import { TestObjEvent } from './test-event';

export class TestObj1 {
    private num: number;

    public constructor() {
        this.num = 5331341999;

        eventManager.register(new TestObjEvent());
    }

    public sendMsg(): void {
        eventManager.fireEvent(new TestObjEvent(null, {num: this.num, someString: 'a string', testObj: this}));
    }

    public getNum(): number {
        return this.num;
    }

};

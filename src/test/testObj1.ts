import './Event';
// import { TestObjEvent } from './testObjEvent';

export class TestObjEvent extends EditorEvent {

    public constructor(callback?: (obj: TestObj1) => void, obj?: TestObj1) {
        super(callback, obj, 'testing_send');
    };
};

export class TestObj1 {
    private num: number;

    public constructor() {
        this.num = 5331341999;

        eventManager.register(new TestObjEvent());
    }

    public sendMsg(): void {
        eventManager.fireEvent(new TestObjEvent(null, this));
    }

    public getNum(): number{
        return this.num;
    }

};
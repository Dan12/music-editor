import './Event';
// import { TestObjEvent } from './testObjEvent';

export interface TestInterface{
    num: number;
    someString: string;
    testObj: TestObj1;
}

export class TestObjEvent extends EditorEvent {
    public constructor(callback?: (obj: TestInterface) => void, obj?: TestInterface) {
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
        eventManager.fireEvent(new TestObjEvent(null, {num: this.num, someString: 'a test string', testObj: this}));
    }

    public getNum(): number{
        return this.num;
    }

};
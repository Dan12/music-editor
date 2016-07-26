import { TestObj1 } from './testObj1';
import './Event';

export class TestObjEvent extends EditorEvent {

    private callback: (obj: TestObj1) => void;
    private obj: TestObj1;
    private name = 'test_send';

    public constructor(callback?: (obj: TestObj1) => void, obj?: TestObj1) {
        super();
        callback ? this.callback = callback : this.obj = obj;
    };

    public getName(): string {
        return this.name;
    }

    public getArgs() {
        return this.obj;
    };

    public eventFired(eventClass: EditorEvent): void {
        this.callback(eventClass.getArgs());
    }
};
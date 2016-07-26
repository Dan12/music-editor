import { TestObj1 } from './testObj1';
import { TestObjEvent } from './testObjEvent';

export class TestSendToObject {

    public constructor() {
        eventManager.subscribe(new TestObjEvent(this.callbackTest));
    }

    private callbackTest(obj: TestObj1): void {
        console.log('Callback object:');
        console.log(obj);
    }
}
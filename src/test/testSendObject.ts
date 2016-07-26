import { TestObj1, TestObjEvent } from './testObj1';
// import { TestObjEvent } from './testObjEvent';

export class TestSendToObject {

    public constructor() {
        eventManager.subscribe(new TestObjEvent(this.callbackTest));
    }

    private callbackTest(obj: TestObj1): void {
        console.log('Callback object:');
        console.log(obj);
        console.log(obj.getNum());
        // console.log(obj.getName()); // property does not exist on type TestObj1
    }
}
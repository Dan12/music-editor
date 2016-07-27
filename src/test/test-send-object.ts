import { TestInterface, TestObjEvent } from './test-event';
// import { TestObjEvent } from './testObjEvent';

export class TestSendToObject {

    public constructor() {
        eventManager.subscribe(new TestObjEvent(this.callbackTest));
    }

    private callbackTest(obj: TestInterface): void {
        console.log('Callback object:');
        console.log(obj);
        console.log(obj.num);
        console.log(obj.testObj.getNum());
        // console.log(obj.testObj.getName()); // Property 'getName' does not exist on type 'TestObj1'.
    }
}

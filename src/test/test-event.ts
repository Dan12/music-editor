import { TestObj1 } from './test-obj-1';

export interface TestInterface {
    num: number;
    someString: string;
    testObj: TestObj1;
}

export class TestObjEvent extends EditorEvent {
    public constructor(callback?: (obj: TestInterface) => void, obj?: TestInterface) {
        super(callback, obj, 'testing_send');
    };
};

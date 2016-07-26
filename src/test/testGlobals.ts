const testFileName = 'a9.mp3';
let someOtherValue = 123141;

let tempEventManager: any = null;
try {
    tempEventManager = new TestEventManager();
} catch (e) {
    console.log('Test Event Manager not loaded');
    console.log(e);
}
const eventManager = tempEventManager;
tempEventManager = null;
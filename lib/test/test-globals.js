var testFileName = 'a9.mp3';
var someOtherValue = 123141;
var tempEventManager = null;
try {
    tempEventManager = new TestEventManager();
}
catch (e) {
    console.log('Test Event Manager not loaded');
    console.log(e);
}
var eventManager = tempEventManager;
tempEventManager = null;

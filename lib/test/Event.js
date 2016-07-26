// global abstract class
var EditorEvent = (function () {
    function EditorEvent(callback, obj, name) {
        callback ? this.callback = callback : this.obj = obj;
        this.name = name;
    }
    // returns the event name
    EditorEvent.prototype.getName = function () {
        return this.name;
    };
    EditorEvent.prototype.getArgs = function () {
        return this.obj;
    };
    ;
    EditorEvent.prototype.eventFired = function (eventClass) {
        this.callback(eventClass.getArgs());
    };
    return EditorEvent;
}());

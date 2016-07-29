define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractLogic = (function () {
        function AbstractLogic() {
        }
        AbstractLogic.prototype.handle_click = function (x, y) {
            // do something about the click
        };
        return AbstractLogic;
    }());
    exports.AbstractLogic = AbstractLogic;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractDraw = (function () {
        function AbstractDraw() {
        }
        AbstractDraw.prototype.redraw = function () {
            // no redrawing
        };
        return AbstractDraw;
    }());
    exports.AbstractDraw = AbstractDraw;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractFacade = (function () {
        function AbstractFacade() {
        }
        AbstractFacade.prototype.draw = function () {
            this.draw_class.draw();
        };
        return AbstractFacade;
    }());
    exports.AbstractFacade = AbstractFacade;
});

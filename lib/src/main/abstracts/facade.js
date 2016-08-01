define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractFacade = (function () {
        function AbstractFacade() {
        }
        /**
         * initialize the html of the gui element
         */
        AbstractFacade.prototype.initialize_gui = function () {
            this.draw_class.initialize();
        };
        /**
         * redrawing of custom canvas elements sent down the heirarchy
         */
        AbstractFacade.prototype.redraw = function () {
            this.draw_class.redraw();
        };
        return AbstractFacade;
    }());
    exports.AbstractFacade = AbstractFacade;
});

define(["require", "exports"], function (require, exports) {
    "use strict";
    var AbstractDraw = (function () {
        /**
         * create the jquery object for this object's container
         * @class AbstractDraw
         * @param container {string} this elements id
         */
        function AbstractDraw(container) {
            /**
             * the JQuery element that is this gui element
             * @property container
             * @type JQuery
             * @default undefined
             */
            this.container = undefined;
            this.container = $("#" + container);
        }
        /**
         * @method setStyle
         * @protected
         * @param style {string} the css style for this element as a string
         * @example
         *     this.setStyle('font-size: 10px; color: red;')
         */
        AbstractDraw.prototype.setStyle = function (style) {
            this.container.attr('style', style);
        };
        /**
         * redraw method for canvases
         * @method redraw
         */
        AbstractDraw.prototype.redraw = function () {
            // no redrawing
        };
        return AbstractDraw;
    }());
    exports.AbstractDraw = AbstractDraw;
});

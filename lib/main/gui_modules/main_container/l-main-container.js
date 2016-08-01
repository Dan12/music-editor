var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/logic'], function (require, exports, logic_1) {
    "use strict";
    /**
     * Controls the general actions that happen on the page and only changes overarching elements.
     * @class MainContainerLogic
     * @constructor
     */
    var MainContainerLogic = (function (_super) {
        __extends(MainContainerLogic, _super);
        function MainContainerLogic() {
            _super.call(this);
            /**
             * the percent of the view height that should be the body font size
             * @property font_size_percent
             * @type float
             */
            this.font_size_percent = 0.04;
            this.initializeResize();
        }
        /**
         * Initialize the resizing logic by setting the font size and listening for window resizes
         * @method initializeResize
         * @private
         */
        MainContainerLogic.prototype.initializeResize = function () {
            var _this = this;
            this.setFontSize();
            $(window).resize(function () {
                _this.setFontSize();
            });
        };
        /**
         * Set the body font size based on the window height and the font_size_percent
         * @method setFontSize
         * @private
         */
        MainContainerLogic.prototype.setFontSize = function () {
            $('body').css('font-size', (window.innerHeight * this.font_size_percent) + 'px');
        };
        return MainContainerLogic;
    }(logic_1.AbstractLogic));
    exports.MainContainerLogic = MainContainerLogic;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/draw'], function (require, exports, draw_1) {
    "use strict";
    /**
     * @property main_container_style
     * @for MainContainerDraw
     */
    var main_container_style = '\
width: 100%; \
height: 100%; \
';
    /**
     * This class draws the elements for the main container, which is just a footer
     * @class MainContainerDraw
     * @constructor
     * @param container {string} the container id for this class
     */
    var MainContainerDraw = (function (_super) {
        __extends(MainContainerDraw, _super);
        function MainContainerDraw(container) {
            _super.call(this, container);
        }
        MainContainerDraw.prototype.initialize = function () {
            this.setStyle(main_container_style);
            this.container.append("<footer id=\"main_footer\">Made by Daniel Weber</footer>");
        };
        return MainContainerDraw;
    }(draw_1.AbstractDraw));
    exports.MainContainerDraw = MainContainerDraw;
});
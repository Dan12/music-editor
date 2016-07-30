var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/draw'], function (require, exports, draw_1) {
    "use strict";
    var main_container_style = '\
width: 99.8%; \
height: 99.5%; \
border: 1px solid black; \
';
    var MainContainerDraw = (function (_super) {
        __extends(MainContainerDraw, _super);
        function MainContainerDraw() {
            _super.call(this);
        }
        MainContainerDraw.prototype.initialize = function () {
            $('#main_area').append("<div id=\"main_container\" style=\"" + main_container_style + "\"></div>");
            $('#main_container').append("<div>Starting Up</div>");
            $('#main_container').append("<footer id=\"main_footer\">Made by Daniel Weber</footer>");
        };
        MainContainerDraw.prototype.redraw = function () {
            // draw me
        };
        return MainContainerDraw;
    }(draw_1.AbstractDraw));
    exports.MainContainerDraw = MainContainerDraw;
});

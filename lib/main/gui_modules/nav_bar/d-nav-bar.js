var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/draw'], function (require, exports, draw_1) {
    "use strict";
    var nav_bar_style = '\
background-color: rgb(230,230,230); \
width: 100%; \
height: 15%; \
';
    var NavBarDraw = (function (_super) {
        __extends(NavBarDraw, _super);
        function NavBarDraw(container) {
            _super.call(this, container);
        }
        NavBarDraw.prototype.initialize = function () {
            this.setStyle(nav_bar_style);
            this.container.append('<button id="expand_file_browser">Expand File Browser</button>');
            this.container.append('<button id="toggle_keyboard">Show Keyboard</button>');
        };
        return NavBarDraw;
    }(draw_1.AbstractDraw));
    exports.NavBarDraw = NavBarDraw;
});

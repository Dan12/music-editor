var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/draw'], function (require, exports, draw_1) {
    "use strict";
    var MainContainer;
    (function (MainContainer) {
        // create class
        var Draw = (function (_super) {
            __extends(Draw, _super);
            function Draw() {
                _super.call(this);
            }
            Draw.prototype.draw = function () {
                // draw me
            };
            return Draw;
        }(draw_1.AbstractDraw));
        MainContainer.Draw = Draw;
    })(MainContainer || (MainContainer = {}));
});

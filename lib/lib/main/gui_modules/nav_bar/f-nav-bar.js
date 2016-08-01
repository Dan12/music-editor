var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/facade', './d-nav-bar', './l-nav-bar'], function (require, exports, facade_1, d_nav_bar_1, l_nav_bar_1) {
    "use strict";
    var NavBarFacade = (function (_super) {
        __extends(NavBarFacade, _super);
        function NavBarFacade() {
            _super.call(this);
            this.draw_class = new d_nav_bar_1.MainContainerDraw();
            this.logic_class = new l_nav_bar_1.MainContainerLogic();
        }
        return NavBarFacade;
    }(facade_1.AbstractFacade));
    exports.NavBarFacade = NavBarFacade;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/facade', './d-main-container', './l-main-container'], function (require, exports, facade_1, d_main_container_1, l_main_container_1) {
    "use strict";
    var MainContainerFacade = (function (_super) {
        __extends(MainContainerFacade, _super);
        function MainContainerFacade() {
            _super.call(this);
            this.draw_class = new d_main_container_1.MainContainerDraw();
            this.logic_class = new l_main_container_1.MainContainerLogic();
        }
        return MainContainerFacade;
    }(facade_1.AbstractFacade));
    exports.MainContainerFacade = MainContainerFacade;
});

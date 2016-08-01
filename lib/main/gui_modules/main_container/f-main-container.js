var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/facade', './d-main-container', './l-main-container', '../nav_bar/f-nav-bar'], function (require, exports, facade_1, d_main_container_1, l_main_container_1, f_nav_bar_1) {
    "use strict";
    /**
     * The facade for the main container.
     * It initializes and sets the necessary styles for the main gui container.
     * Contains a nav bar
     * @class MainContainerFacade
     * @constructor
     * @param parent {JQuery} the parent element for this object
     */
    var MainContainerFacade = (function (_super) {
        __extends(MainContainerFacade, _super);
        function MainContainerFacade(parent) {
            _super.call(this, 'main_container', parent);
            // initialize this facade's enclosed classes
            this.draw_class = new d_main_container_1.MainContainerDraw(this.container);
            this.logic_class = new l_main_container_1.MainContainerLogic();
            // add a nav bar to this container
            this.addGuiChild(new f_nav_bar_1.NavBarFacade($("#" + this.container)));
        }
        return MainContainerFacade;
    }(facade_1.AbstractFacade));
    exports.MainContainerFacade = MainContainerFacade;
});

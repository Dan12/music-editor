var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/logic'], function (require, exports, logic_1) {
    "use strict";
    var NavBarLogic = (function (_super) {
        __extends(NavBarLogic, _super);
        function NavBarLogic() {
            _super.call(this);
        }
        return NavBarLogic;
    }(logic_1.AbstractLogic));
    exports.NavBarLogic = NavBarLogic;
});

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/logic'], function (require, exports, logic_1) {
    "use strict";
    var MainContainer;
    (function (MainContainer) {
        // create class
        var Logic = (function (_super) {
            __extends(Logic, _super);
            function Logic() {
                _super.call(this);
                // do something
            }
            return Logic;
        }(logic_1.AbstractLogic));
    })(MainContainer || (MainContainer = {}));
});

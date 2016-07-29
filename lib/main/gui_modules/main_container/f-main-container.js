/// <reference path="d-main-container.ts" />
/// <reference path="./l-main-container.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../abstracts/facade'], function (require, exports, facade_1) {
    "use strict";
    var MainContainer;
    (function (MainContainer) {
        var lettersRegexp = /^[A-Za-z]+$/;
        var LettersOnlyValidator = (function () {
            function LettersOnlyValidator() {
            }
            LettersOnlyValidator.prototype.isAcceptable = function (s) {
                return lettersRegexp.test(s);
            };
            return LettersOnlyValidator;
        }());
        MainContainer.LettersOnlyValidator = LettersOnlyValidator;
        // create class
        var Facade = (function (_super) {
            __extends(Facade, _super);
            function Facade() {
                _super.call(this);
                this.draw_class = new Draw();
            }
            return Facade;
        }(facade_1.AbstractFacade));
        MainContainer.Facade = Facade;
    })(MainContainer || (MainContainer = {}));
});

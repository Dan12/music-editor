var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TestAbstract = (function () {
    function TestAbstract() {
    }
    return TestAbstract;
}());
var ImpAbs = (function (_super) {
    __extends(ImpAbs, _super);
    function ImpAbs() {
        _super.call(this);
        console.log("constructed");
    }
    ImpAbs.prototype.testMethod = function () {
        console.log("called test method");
    };
    return ImpAbs;
}(TestAbstract));
//# sourceMappingURL=testAbstract.js.map
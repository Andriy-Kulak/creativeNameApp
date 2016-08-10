var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    var AbTestLabel = (function (_super) {
        __extends(AbTestLabel, _super);
        function AbTestLabel() {
            _super.apply(this, arguments);
        }
        return AbTestLabel;
    }(BasicNameInheritance));
    return AbTestLabel;
});
//# sourceMappingURL=abTestLabel.model.js.map
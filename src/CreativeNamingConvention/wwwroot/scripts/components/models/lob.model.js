var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for lob input
    var Lob = (function (_super) {
        __extends(Lob, _super);
        function Lob() {
            _super.apply(this, arguments);
        }
        return Lob;
    }(BasicNameInheritance));
    return Lob;
});
//# sourceMappingURL=lob.model.js.map
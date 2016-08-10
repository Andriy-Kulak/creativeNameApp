var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for size input
    var Size = (function (_super) {
        __extends(Size, _super);
        function Size() {
            _super.apply(this, arguments);
        }
        return Size;
    }(BasicNameInheritance));
    return Size;
});
//# sourceMappingURL=size.model.js.map
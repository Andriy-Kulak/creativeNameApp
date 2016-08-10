var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for creative type input
    var CreativeType = (function (_super) {
        __extends(CreativeType, _super);
        function CreativeType() {
            _super.apply(this, arguments);
        }
        return CreativeType;
    }(BasicNameInheritance));
    return CreativeType;
});
//# sourceMappingURL=creativeType.model.js.map
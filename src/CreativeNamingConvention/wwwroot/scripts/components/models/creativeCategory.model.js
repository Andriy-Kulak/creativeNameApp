var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for Creative Category input
    var CreativeCategories = (function (_super) {
        __extends(CreativeCategories, _super);
        function CreativeCategories() {
            _super.apply(this, arguments);
        }
        return CreativeCategories;
    }(BasicNameInheritance));
    return CreativeCategories;
});
//# sourceMappingURL=creativeCategory.model.js.map
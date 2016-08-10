var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", '../../components/models/basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    var Product = (function (_super) {
        __extends(Product, _super);
        function Product() {
            _super.apply(this, arguments);
        }
        return Product;
    }(BasicNameInheritance));
    return Product;
});
//# sourceMappingURL=product.model.js.map
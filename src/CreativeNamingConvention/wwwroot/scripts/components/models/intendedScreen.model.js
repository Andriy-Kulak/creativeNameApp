var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for intended screen input
    var IntedendedScreen = (function (_super) {
        __extends(IntedendedScreen, _super);
        function IntedendedScreen() {
            _super.apply(this, arguments);
        }
        return IntedendedScreen;
    }(BasicNameInheritance));
    return IntedendedScreen;
});
//# sourceMappingURL=IntendedScreen.model.js.map
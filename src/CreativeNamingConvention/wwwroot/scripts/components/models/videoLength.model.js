var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
define(["require", "exports", './basicNameInh.model'], function (require, exports, BasicNameInheritance) {
    "use strict";
    //model for video length input
    var VideoLength = (function (_super) {
        __extends(VideoLength, _super);
        function VideoLength() {
            _super.apply(this, arguments);
        }
        return VideoLength;
    }(BasicNameInheritance));
    return VideoLength;
});
//# sourceMappingURL=videoLength.model.js.map
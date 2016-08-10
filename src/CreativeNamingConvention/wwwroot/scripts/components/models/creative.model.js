define(["require", "exports"], function (require, exports) {
    "use strict";
    var CreativeModel = (function () {
        function CreativeModel() {
        }
        //method that creates the creativeName string
        CreativeModel.prototype.getCreativeName = function () {
            //if creative message is blank, "X" will be used in it its place
            if (!this.creativeMessage) {
                this.creativeMessage = "X";
            }
            var params = [
                //***don't move the order: It will impact data to be created*** 
                this.mediaType.code,
                this.lob.code,
                this.product.code,
                this.creativeCategories.code,
                this.intendedScreen.code,
                this.creativeType.code,
                this.creativeMessage,
                this.sizeWidth,
                this.sizeHeight,
                this.abTestLabel.code,
                this.creativeVersion,
                this.videoLength.code,
                this.creativeOps.code // Order: 13
            ];
            this.text = params.join('_');
        };
        return CreativeModel;
    }());
    return CreativeModel;
});
//# sourceMappingURL=creative.model.js.map
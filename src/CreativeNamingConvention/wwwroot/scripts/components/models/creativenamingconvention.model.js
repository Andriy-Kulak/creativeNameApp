define(["require", "exports"], function (require, exports) {
    "use strict";
    //import MediaType = require('./mediatype.model');
    var CreativeNamingConvention = (function () {
        function CreativeNamingConvention(id, name, campaignName, mediaType) {
            this.id = id;
            this.name = name;
            this.campaignName = campaignName;
            this.mediaType = mediaType;
        }
        CreativeNamingConvention.prototype.getCreativeName = function () {
            return this.id + this.name + this.campaignName + this.mediaType.code;
        };
        return CreativeNamingConvention;
    }());
    return CreativeNamingConvention;
});
//# sourceMappingURL=creativenamingconvention.model.js.map
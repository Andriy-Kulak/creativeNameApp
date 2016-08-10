define(["require", "exports"], function (require, exports) {
    "use strict";
    var InfoModalService = (function () {
        function InfoModalService(toaster) {
            var vm = this;
            vm.toaster = toaster;
        }
        InfoModalService.prototype.infoLob = function () {
            this.toaster.pop('info', "LOB Description:", "Line of Business/Channel (e.g. Mobility_Retail, Mobility_eComm)", 7000);
        };
        InfoModalService.prototype.infoProduct = function () {
            this.toaster.pop('info', "Product Description:", "Media plan grouping (e.g. DirecTV, eCommerceGR)", 7000);
        };
        InfoModalService.prototype.infoCreativeCategory = function () {
            this.toaster.pop('info', "Creative Category Description:", "Major groupings of creative messaging: (e.g. GoPhone, MyAT&T, Data)", 7000);
        };
        InfoModalService.prototype.infoVideoLength = function () {
            this.toaster.pop('info', "Video Length Description:", "Only if the creative is Video, then please select the length of video: 15sec or 30 sec or Full Length.", 7000);
        };
        InfoModalService.prototype.infoMediaType = function () {
            this.toaster.pop('info', "Media Type Description:", "Where is this creative being served (i.e. Search, Display, Social)", 7000);
        };
        InfoModalService.prototype.infoAbTestLabel = function () {
            this.toaster.pop('info', "A/B Test Label Description:", "Column to denote type of test: e.g. Landing Page Test, Creative Version Test…", 7000);
        };
        InfoModalService.prototype.infoSizeHeight = function () {
            this.toaster.pop('info', "Size Height Description:", "Height of the creative asset ( e.g. 1x1, 300x250)", 7000);
        };
        InfoModalService.prototype.infoSizeWidth = function () {
            this.toaster.pop('info', "Size Width Description:", "Width of the creative asset ( e.g. 1x1, 300x250)", 7000);
        };
        InfoModalService.prototype.infoCreativeVersion = function () {
            this.toaster.pop('info', "Creative Version Description:", "Version of Test or Version of Creative Issued by Vendor (e.g. 1, 2, 3, 4…)", 7000);
        };
        InfoModalService.prototype.infoIntendedScreen = function () {
            this.toaster.pop('info', "Intended Screen Description:", "Where is media being placed/purchased? (e.g. Desktop, Tablet, Smartphone.)", 7000);
        };
        InfoModalService.prototype.infoCreativeOps = function () {
            this.toaster.pop('info', "Creative Ops Description:", "Static ad?  For Google? Tracking Pixel? Information specific to trafficking", 7000);
        };
        InfoModalService.prototype.infoCreativeType = function () {
            this.toaster.pop('info', "Creative Type Description:", "Kind of media being placed (Standard Banner , Video, Rich Media, PagePost_Tweet, High Impact Unit)", 7000);
        };
        InfoModalService.prototype.infoCampaignName = function () {
            this.toaster.pop('info', "Campaign Name Description:", "The purpose of the Creative Campaign Name is to identify the TRUE Creative Campaign. There might be multiple Creative Messages for one Creative Campaign. For examples, the creative campaign name \"$650ETF\” might have several creative message names (i.e. $650 ETF BET, $650 ETF BET Skin, $650 ETF She.)", 7000);
        };
        InfoModalService.prototype.infoCreativeMessage = function () {
            this.toaster.pop('info', "Creative Message Description:", "The ‘name’ or ‘abbreviated code’ of creative campaign: (e.g. CARTABANDONER, WCAVVHSP).", 7000);
        };
        InfoModalService.prototype.infoCreativeMessageName = function () {
            this.toaster.pop('info', "Creative Message Name Description:", "The purpose of the Creative_Message_Name is to identify the TRUE Creative Messages used in the freeform section. Therefore, please enter the TRUE Creative Message, but not the abbreviated codes. For example, if the Creative_Name: D_MBL_EGR_FPH_MOB_BAN_1SEPTFR244633, the freeform section is the part highlighed in red.Thus, the Creative_Message_Name could be September Free.", 7000);
        };
        InfoModalService.$inject = [
            'toaster'
        ];
        return InfoModalService;
    }());
    return InfoModalService;
});
//# sourceMappingURL=infoModal.service.js.map
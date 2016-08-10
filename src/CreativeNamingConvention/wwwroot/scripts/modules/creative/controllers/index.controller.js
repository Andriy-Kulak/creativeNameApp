define(["require", "exports", '../../../components/models/mediaType.model', '../../../components/models/creative.model', '../../../components/models/videoLength.model', '../../../components/models/abTestLabel.model', '../../../components/models/IntendedScreen.model', '../../../components/models/creativeOps.model', '../../../components/models/creativeType.model', '../../../components/models/dropdownOptions.model'], function (require, exports, MediaType, CreativeModel, VideoLength, AbTestLabel, IntendedScreen, CreativeOps, CreativeType, dropdownOptions) {
    "use strict";
    var IndexCtrl = (function () {
        function IndexCtrl($scope, $timeout, $location, $anchorScroll, CreativeService, LOBData, FormModalService, InfoModalService) {
            this.title = 'Creative Naming Convention App';
            this.buttonDisabled = false;
            this.model = new CreativeModel();
            this.options = new dropdownOptions();
            this.postSuccess = false;
            var vm = this;
            vm.$scope = $scope;
            vm.$timeout = $timeout;
            vm.$location = $location;
            vm.$anchorScroll = $anchorScroll;
            vm.CreativeService = CreativeService;
            vm.FormModalService = FormModalService;
            vm.InfoModalService = InfoModalService;
            vm.optionsArray = [
                //***not looping getLOBs() because we are already calling the API in creative.module.ts as part of the resolve**
                { func: CreativeService.getVideoLengths(), prop: 'videoLengths', model: VideoLength },
                { func: CreativeService.getMediaTypes(), prop: 'mediaTypes', model: MediaType },
                { func: CreativeService.getAbTestLabels(), prop: 'abTestLabels', model: AbTestLabel },
                { func: CreativeService.getIntendedScreens(), prop: 'intendedScreens', model: IntendedScreen },
                { func: CreativeService.getCreativeOps(), prop: 'creativeOps', model: CreativeOps },
                { func: CreativeService.getCreativeTypes(), prop: 'creativeTypes', model: CreativeType }
            ];
            // The list of options for LOB dropdown menu
            //getLOBs() is a dependency in our resolve object in our router
            vm.options.lobs = LOBData;
            //the list of options available for the the remaining inputs
            var optArr = vm.optionsArray;
            var _loop_1 = function(i) {
                optArr[i].func.then(function (response) {
                    vm.options[optArr[i].prop] = response.data;
                });
            };
            for (var i in optArr) {
                _loop_1(i);
            }
        }
        ;
        // method that is triggered when "Clear All" button is pressed
        IndexCtrl.prototype.clearAllValues = function () {
            this.model = new CreativeModel;
            this.nameConvForm.$setPristine();
            this.nameConvForm.$setUntouched();
            this.FormModalService.clearAllModal();
            this.postSuccess = false;
        };
        //method that is triggered when "Submit" is pressed
        IndexCtrl.prototype.addNameConv = function () {
            //disables submit button for 3 seconds so user doesn't submit form multiple times
            var _this = this;
            _this.buttonDisabled = true;
            this.$timeout(function () { return _this.buttonDisabled = false; }, 3000);
            //if form is not properly filled out, warning message will appear
            this.nameConvForm.$submitted && !this.nameConvForm.$valid ? this.FormModalService.incompleteFormModal() : '';
            if (this.nameConvForm.$valid) {
                this.model.getCreativeName();
                console.log("result", this.model);
                return this.CreativeService.postCreativeName(this.model).then(function (response) {
                    _this.FormModalService.successModal();
                    _this.postSuccess = true;
                    _this.model.creativeMessage = null;
                    _this.model.creativeMessageName = null;
                    _this.model.campaignName = null;
                    _this.nameConvForm.$setPristine();
                    _this.nameConvForm.$setUntouched();
                    _this.$location.hash('successCreativeTag');
                    _this.$anchorScroll();
                    // call $anchorScroll()
                }, 
                //error handling is taken care of in creative.mode.ts
                function (response) {
                    _this.model.creativeMessage = null; //clears the 'X' value in creative message field
                    _this.postSuccess = false;
                });
            }
        };
        IndexCtrl.$inject = ['$scope', '$timeout', '$location', '$anchorScroll', 'CreativeService', 'LOBData', 'FormModalService', 'InfoModalService', 'toaster'];
        return IndexCtrl;
    }());
    return IndexCtrl;
});
//# sourceMappingURL=index.controller.js.map
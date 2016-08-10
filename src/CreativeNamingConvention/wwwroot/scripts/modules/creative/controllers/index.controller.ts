//services
import CreativeService = require('../../../components/services/creative.service');
import FormModalService = require('../../../components/services/formModal.service');
import InfoModalService = require('../../../components/services/infoModal.service');

//all imported models
import MediaType = require('../../../components/models/mediaType.model');
import CreativeModel = require('../../../components/models/creative.model');
import Lob = require('../../../components/models/lob.model');
import VideoLength = require('../../../components/models/videoLength.model');
import Product = require('../../../components/models/product.model');
import AbTestLabel = require('../../../components/models/abTestLabel.model');
import CreativeCategory = require('../../../components/models/creativeCategory.model');
import CreativeVersion = require('../../../components/models/CreativeVersion.model');
import IntendedScreen = require('../../../components/models/IntendedScreen.model');
import CreativeOps = require('../../../components/models/creativeOps.model');
import CreativeType = require('../../../components/models/creativeType.model');
import dropdownOptions = require('../../../components/models/dropdownOptions.model');

class IndexCtrl {
    public static $inject = ['$scope', '$timeout', '$location', '$anchorScroll', 'CreativeService', 'LOBData', 'FormModalService', 'InfoModalService', 'toaster'];
    private $scope: ng.IScope;
    private $timeout;
    private $location;
    private $anchorScroll;
    private toaster;
    private title: string = 'Creative Naming Convention App';
    private CreativeService: CreativeService;
    private FormModalService: FormModalService;
    private InfoModalService: InfoModalService;
    public nameConvForm: ng.IFormController;
    public buttonDisabled: boolean = false;

    private model: CreativeModel = new CreativeModel();
    private LOBData; // will become returned resolve data from route
    public options: dropdownOptions = new dropdownOptions();
    private optionsArray: any[]; // where all the option parameters are stored to get the value
    public postSuccess: boolean = false;

    constructor($scope: ng.IScope, $timeout, $location, $anchorScroll, CreativeService, LOBData, FormModalService, InfoModalService ) {
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
        for (let i in optArr) {
            optArr[i].func.then(function (response) {
                vm.options[optArr[i].prop] = response.data;
            });
        }  
    };

    // method that is triggered when "Clear All" button is pressed
    public clearAllValues() {
        this.model = new CreativeModel;
        this.nameConvForm.$setPristine();
        this.nameConvForm.$setUntouched();        
        this.FormModalService.clearAllModal();
        this.postSuccess = false;        
    }

    //method that is triggered when "Submit" is pressed
    public addNameConv() {       
        //disables submit button for 3 seconds so user doesn't submit form multiple times
        var _this = this;
        _this.buttonDisabled = true;
        this.$timeout(function () { return _this.buttonDisabled = false }, 3000);
      
        //if form is not properly filled out, warning message will appear
        this.nameConvForm.$submitted && !this.nameConvForm.$valid ? this.FormModalService.incompleteFormModal() : '';

        if (this.nameConvForm.$valid) {
            
            this.model.getCreativeName();
            console.log("result", this.model);    
            return this.CreativeService.postCreativeName(this.model).then(function(response) {
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
    }
}
                 
export = IndexCtrl;

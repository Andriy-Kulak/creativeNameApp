define(["require", "exports"], function (require, exports) {
    "use strict";
    describe('Index controller', function () {
        beforeEach(angular.mock.module('creative.module'));
        var $scope;
        var $rootScope;
        var $controller;
        var LOBData;
        var controller;
        var element;
        beforeEach(inject(function (_$rootScope_, _$controller_) {
            $rootScope = _$rootScope_;
            $controller = _$controller_;
            $scope = {};
            LOBData = {
                contents: [{ message: 'Hello World!' }]
            };
            controller = $controller('IndexCtrl', { $scope: $scope, LOBData: LOBData });
        }));
        it("should initialize correctly", function () {
            expect(controller).toBeDefined();
        });
        it("has a clearAllFunction method that should create a new instance of model to delete current values from current inputs", function () {
            // setting up values that will trigger a dirty/touched form
            controller.nameConvForm = {
                $valid: true,
                $setPristine: function () { },
                $setUntouched: function () { },
            };
            controller.postSuccess = true;
            controller.model = {
                creativeMessage: "fake message",
                campaignName: "fake Campaign"
            };
            spyOn(controller.nameConvForm, '$setPristine');
            spyOn(controller.nameConvForm, '$setUntouched');
            // executing method that is triggered when user click 'Clear All' button
            controller.clearAllValues();
            console.log(controller.model);
            expect(controller.nameConvForm.$setPristine).toHaveBeenCalled();
            expect(controller.nameConvForm.$setUntouched).toHaveBeenCalled();
            expect(controller.postSuccess).toBeFalsy();
            //console.log('name Conv Form 2'controller.nameConvForm)
            //console.log('creative message 2', controller.model.creativeMessage);
            //expect(controller.model.creativeMessage).toEqual(null);
        });
        it("has a addNameConv method that should PREVENT a postCreativeName method execution when form IS *IN*VALID", function () {
            // setting up values for form
            controller.nameConvForm = {
                $valid: false,
            };
            controller.postSuccess = false;
            controller.model = {
                getCreativeName: function () { },
                creativeMessage: "TEST MESSAGE",
                campaignName: "TEST CAMPAIGN"
            };
            controller.CreativeService = {
                postCreativeName: function () { }
            };
            spyOn(controller.CreativeService, 'postCreativeName').and.returnValue("success");
            //executing method when submit button is pressed in the form
            controller.addNameConv();
            expect(controller.postSuccess).toBeFalsy;
            expect(controller.model.creativeMessage).toEqual("TEST MESSAGE");
            expect(controller.model.campaignName).toEqual("TEST CAMPAIGN");
        });
        it("has a addNameConv method that should send a postCreativeName method when form IS VALID", function () {
            //// setting up values for form
            ////function postCreativeName(): void { }; 
            //controller.nameConvForm = {
            //    $valid: true,
            //}
            //controller = {
            //    [this.CreativeService]: function postCreativeName(): void { }
            //}
            //controller.model = {
            //    getCreativeName: function (): void { }
            //}
            //var value123 = 123;
            //controller.CreativeService = {
            //    postCreativeName: function (value123) { return value123; }
            //}
            //spyOn(controller.CreativeService, 'postCreativeName').and.returnValue("success");
            ////executing method when submit button is pressed in the form
            ////spyOn(controller, 'addNameConv').and.callThrough;
            // setting up values for form
            controller.nameConvForm = {
                $valid: true,
            };
            controller.postSuccess = false;
            controller.model = {
                getCreativeName: function () { },
                creativeMessage: "TEST MESSAGE",
                campaignName: "TEST CAMPAIGN"
            };
            controller.postSuccess = false;
            //controller.CreativeService = {
            //    postCreativeName: function (): void { }
            //}
            //controller = {
            //    [this.CreativeService]: function postCreativeName(): void { }
            //}
            //executing method when submit button is pressed in the form
            controller.addNameConv();
            spyOn(controller.CreativeService, 'postCreativeName')
                .and.returnValue(controller.postSuccess = true)
                .and.returnValue(controller.model.creativeMessage = null)
                .and.returnValue(controller.model.campaignName = null);
            expect(controller.postSuccess).toEqual(true);
            expect(controller.model.creativeMessage).toEqual(null);
            expect(controller.model.campaignName).toEqual(null);
        });
    });
});
//# sourceMappingURL=index.controller.spec.js.map
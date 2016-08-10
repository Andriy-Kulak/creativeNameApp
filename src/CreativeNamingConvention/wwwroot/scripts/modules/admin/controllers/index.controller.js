define(["require", "exports"], function (require, exports) {
    "use strict";
    var IndexCtrl = (function () {
        function IndexCtrl($scope, AdminService) {
            this.title = 'Admin Controller';
            this.formFields = new Array();
            this.$scope = $scope;
            this.AdminService = AdminService;
            this.formFields = [
                {
                    key: 'client_Name',
                    type: 'horizontalSelect',
                    wrapper: 'loading',
                    templateOptions: {
                        label: 'Client:',
                        options: ['option 1', 'option 2'],
                        required: true,
                        valueProp: 'client_Name',
                        labelProp: 'client_Name'
                    }
                }];
        }
        IndexCtrl.$inject = ['$scope', 'AdminService'];
        return IndexCtrl;
    }());
    return IndexCtrl;
});
//# sourceMappingURL=index.controller.js.map
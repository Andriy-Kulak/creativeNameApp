import AdminService = require('../../../components/services/admin.service');

class IndexCtrl {
    public static $inject = ['$scope', 'AdminService'];
    private $scope: ng.IScope;
    private AdminService: AdminService;
    private title: string = 'Admin Controller';
    private formFields: Array<any> = new Array<any>();

    constructor($scope: ng.IScope, AdminService) {
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
}

export = IndexCtrl;

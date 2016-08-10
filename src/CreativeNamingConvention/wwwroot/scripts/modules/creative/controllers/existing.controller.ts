class ExistingCtrl {
    public static $inject = ['$scope', 'CreativeDataList', '$filter'];
    private $scope: ng.IScope;
    private $filter;
    
    public creativeDataChart; //used to render chart in ui
    private CreativeDataList; //returned promise from module for getCreativeName GET request
    public refreshData;
    public data;
    public searchLob;
    public lobOption;
    public clearData;

    constructor($scope: ng.IScope, CreativeDataList, $filter) {
        var vm = this;
        vm.$scope = $scope;       
        vm.CreativeDataList = CreativeDataList;
        vm.creativeDataChart = {
            enableFiltering: true,
            data: CreativeDataList,
            enableSorting: true,
            exporterMenuPdf: false,
            rowHeight: 80,
            enableGridMenu: true,
            paginationPageSizes: [100, 250],
            paginationPageSize: 100,
            exporterCsvFilename: 'myFile.csv',
            columnDefs: [
                { field: 'lob.name', displayName: "Lob", cellClass: 'creativeListFont', width: '10%',
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },
                { field: 'userNameId', displayName: "Created By", width: '10%' },
                { field: 'text', displayName: "Creative name", cellClass: 'creativeListFont', width: "35%" },
                {field: 'dateCreated', displayName: "Created On", cellClass: 'creativeListFont', width: '8%',
                    cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS | date:"MM/dd/yyyy"}}</div>',
                },
                { field: 'creativeMessage', displayName: "Creative Message", cellClass: 'creativeListFont', width: '9%' },
                { field: 'creativeMessageName', displayName: "Creative Message Name", cellClass: 'creativeListFont', width: '13%',
                        cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                },                
                { field: 'campaignName', displayName: "Campaign Name", cellClass: 'creativeListFont', width: '15%',
                        cellTemplate: '<div class="ui-grid-cell-contents wrap" white-space: normal title="TOOLTIP">{{COL_FIELD CUSTOM_FILTERS}}</div>'
                 }
            ]
        };

        //returns an array for LOB options to be used by dropdown in existing.html for filtering
        vm.lobOption = CreativeDataList.map((obj) => obj.lob.name);

        vm.refreshData = function () {           
            console.log("refreshTest");
            vm.creativeDataChart.data = $filter('filter')(CreativeDataList, vm.searchLob, undefined);
        };

        vm.clearData = function () {
            vm.searchLob = null;
            vm.creativeDataChart.data = $filter('filter')(CreativeDataList, undefined, undefined);
        };
    }
}

export = ExistingCtrl;
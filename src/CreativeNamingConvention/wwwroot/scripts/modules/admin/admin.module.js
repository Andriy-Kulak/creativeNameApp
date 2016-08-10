define(["require", "exports", './controllers/index.controller', '../../components/services/admin.service'], function (require, exports, IndexCtrl, AdminService) {
    "use strict";
    var app = (function () {
        angular.module("admin.module", [
            'ui.router',
            'formly',
            'formlyBootstrap'
        ])
            .controller("IndexCtrl", IndexCtrl)
            .service('AdminService', AdminService)
            .config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
            $urlRouterProvider.otherwise(function ($injector, $location) {
                var nav = $injector.get('NavService');
                nav.changeState($location.$$path);
            });
            var root = "scripts/modules/admin/";
            $stateProvider
                .state('index', {
                url: "/admin",
                templateUrl: root + "views/index.html",
                controller: 'IndexCtrl',
                controllerAs: 'vm'
            });
            $locationProvider.html5Mode(true);
        });
    })();
    return app;
});
//# sourceMappingURL=admin.module.js.map
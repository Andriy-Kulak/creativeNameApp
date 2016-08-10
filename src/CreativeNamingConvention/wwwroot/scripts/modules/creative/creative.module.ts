import IndexCtrl = require('modules/creative/controllers/index.controller');
import ExistingCtrl = require('modules/creative/controllers/existing.controller');
import CreativeService = require('components/services/creative.service');
import FormModalService = require('components/services/formModal.service');
import InfoModalService = require('components/services/infoModal.service');
import AuthFactory = require('components/services/1auth.factory');
import AuthController = require('modules/auth/controllers/1auth.controller');

var app = (function(){

    angular.module("creative.module",
        [
            'ui.router',
            //'ngRoute',
            'angular-clipboard',
            'ngAnimate',
            'toaster',
            'ui.grid',
            'ui.grid.selection',
            'ui.grid.exporter',
            'ui.grid.pagination',
            'angular.filter'
        ])
        .controller("IndexCtrl", IndexCtrl)
        .controller("ExistingCtrl", ExistingCtrl)
        .service("CreativeService", CreativeService)
        .service("FormModalService", FormModalService)
        .service("InfoModalService", InfoModalService)
        .controller("AuthController", AuthController) // auth
        .factory("AuthFactory", AuthFactory) // auth
        .factory('interceptor', ['$q', '$location', 'toaster', 'FormModalService', function ($q, $location, toaster, FormModalService) {
            return {
                responseError: function (rejection) {
                    //Inproper credentials
                    if (rejection.status == 403) {
                        //might need to update once authentication is set up
                        FormModalService.loginErrorModal();
                        $location.url('/account/login');
                    }

                    if (rejection.status === 400 || rejection.status === 404 || rejection.status === 500) {
                        toaster.pop('error', "System Error " + rejection.status + "!", "Please contact the administrator!", 5000);
                        return $q.reject(rejection);
                    }

                    if (rejection.status === 409) {
                        FormModalService.duplicateModal();
                        return $q.reject(rejection);
                    }

                }
            }
        }])
        .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
            function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

            $urlRouterProvider.otherwise(function ($injector, $location) {
                var nav = $injector.get('NavService')
                nav.changeState($location.$$path);
            });

                // sec
                //$sceDelegateProvider.resourceUrlWhitelist(['self', '.*']);

            $httpProvider.interceptors.push('interceptor');

        var root = "scripts/modules/creative/";

        

        $stateProvider
            .state('test', {
                url: "/creative/test",
                templateUrl: root + "views/test.html",
            })
            .state('index', {
                url: "/creative",
                templateUrl: root + "views/index.html",
                controller: 'IndexCtrl',
                controllerAs: 'vm',
                resolve:  {
                    LOBData: ['CreativeService', '$q', function(CreativeService, $q) {
                        var deferred = $q.defer();
                        CreativeService.getLOBs().then(function (response) {                            
                            deferred.resolve(response.data);                            
                        });
                        return  deferred.promise;
                        }]
                }
            })
            .state('existing', {
                url: "/creative/existing",
                templateUrl: root + "views/existing.html",
                controller: 'ExistingCtrl',
                controllerAs: 'vm',
                resolve: {                  
                    CreativeDataList: ['CreativeService', '$q', function (CreativeService, $q) {
                        var deferred = $q.defer();                       
                        CreativeService.getCreativeNames().then(function (response) {
                            deferred.resolve(response.data);
                        });
                        return deferred.promise;
                    }]
                }
            })
            .state('auth', {
                url: '/creative/login',
                templateUrl: 'scripts/modules/auth/views/index.html', //AK fixed
                controller: 'AuthController',
                controllerAs: 'vm'
            });


        $locationProvider.html5Mode(true);
    }]);

})();

export = app;

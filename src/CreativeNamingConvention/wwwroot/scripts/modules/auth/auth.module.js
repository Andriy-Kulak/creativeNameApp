(function () {
    'use strict';

    angular.module('auth.module', [
      'ngRoute',
      'door3.css',
      'auth.factory'
    ])
      .config(function ($mdThemingProvider, $mdIconProvider) {

          $mdThemingProvider.theme('default')
              .primaryPalette('teal');
      })
      .config([
            '$routeProvider', '$httpProvider', '$sceDelegateProvider', '$locationProvider',
            function ($routeProvider, $httpProvider, $sceDelegateProvider, $locationProvider) {
                // sec
                $sceDelegateProvider.resourceUrlWhitelist(['self', '.*']);
                // route
                $routeProvider.
                when('/account/login', {
                    templateUrl: '/wwwroot/scripts/modules/auth/views/index.html', //AK fixed
                    //templateUrl: '/public/js/modules/auth/views/indexMaterial.html',
                    css: ['/public/js/modules/auth/css/index.css'],
                    controller: 'AuthController',
                    controllerAs: 'vm',
                    resolve: {
                        user: ['authFactory', '$q', function (authFactory, $q) {
                            var deferred = $q.defer();
                            authFactory.getLoggedInUser().then(function (response) {
                                console.log(response.data);
                                deferred.resolve(response.data);
                            });
                            return deferred.promise;
                        }]
                    }
                }).
                otherwise({
                    redirectTo: '/account/login'
                });

                // use the HTML5 History API
                $locationProvider.html5Mode({
                    enabled: true,
                    requireBase: false
                });
            }
      ]);

})();
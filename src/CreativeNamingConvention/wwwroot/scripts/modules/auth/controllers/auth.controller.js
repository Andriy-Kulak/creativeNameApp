(function () {
    'use strict';
    define(['angular'], function(angular){
        angular.module('auth.module')
        .controller('AuthController', function ($scope, $cookies, $route, $http, $timeout, $window, $routeParams, $mdDialog, $mdMedia) {
            var vm = this;
            vm.model = {
                userName: '',
                password: ''
            };
            //encode using base64 encoding -- you'll have to handle decoding on the back end.

            vm.buttonText = 'Log In';

            vm.logIn = function () {
                vm.buttonText = 'Logging In...';
                //console.log(vm);
                $http({
                    url: '/api/data/loginEmail',
                    method: 'POST',
                    data: vm.model,
                }).then(function (response) {
                    if (response.data.Value) {
                        if ($routeParams.ReturnUrl) {
                            $window.location.assign($routeParams.ReturnUrl);
                        } else {
                            $window.location.assign('/');
                        }
                    } else {
                        $window.alert("Invalid Credentials");
                    }

                    vm.buttonText = 'Log In';
                }, function (err) {
                    $window.alert("Login Failed.");
                    vm.buttonText = 'Log In';
                });
            };

            $scope.logOut = function () {
                $http.post('LogOut').then(function (response) {
                });
            };
        });
    });
})();

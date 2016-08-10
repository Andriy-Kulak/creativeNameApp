define(["require", "exports"], function (require, exports) {
    "use strict";
    var AuthController = (function () {
        function AuthController($scope, /* $cookies, $route,*/ $http, $timeout, $window, /*$routeParams, $mdDialog, $mdMedia)*/ $stateParams) {
            var vm = this;
            vm.$scope = $scope;
            //vm.$cookies = $cookies;
            //vm.$route = $route;
            vm.$http = $http;
            vm.$timeout = $timeout;
            vm.$window = $window;
            vm.$stateParams = $window; //$routeParams
            //vm.$mdDialog = $mdDialog; for Material Design
            //vm.$mdMedia = $mdMedia; for Material Design
            vm.model = {
                userName: '',
                password: ''
            };
            //encode using base64 encoding -- you'll have to handle decoding on the back end.
            vm.buttonText = 'Log In TEST';
            vm.logIn = function () {
                vm.buttonText = 'Logging In...';
                console.log("this is what you're sending before the http", vm);
                $http.post('/api/data/loginEmail', vm.model)
                    .then(function (response) {
                    if (response) {
                        console.log("There is response data when login", response.data.value);
                        if ($stateParams.ReturnUrl) {
                            $window.location.assign($stateParams.ReturnUrl);
                        }
                        else {
                            $window.location.assign('/');
                        }
                    }
                    else {
                        $window.alert("Invalid Credentials");
                    }
                    vm.buttonText = 'Log In';
                }, function (err) {
                    console.log("error", err);
                    $window.alert("Login Failed.");
                    vm.buttonText = 'Log In';
                });
            };
            $scope.logOut = function () {
                $http.post('LogOut').then(function (response) {
                });
            };
        }
        AuthController.$inject = ['$scope', '$http', '$timeout', '$window', '$stateParams'];
        return AuthController;
    }());
    return AuthController;
});
//# sourceMappingURL=1auth.controller.js.map
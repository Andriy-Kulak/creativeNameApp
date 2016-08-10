
class AuthController {
    'use strict';
    public static $inject = ['$scope',/* '$cookies', '$route',*/ '$http', '$timeout', '$window',/* '$routeParams', '$mdDialog', '$mdMedia'*/'$stateParams' ];
    private $scope;
    //private $cookies;
    //private $route;
    private $http;
    private $timeout;
    private $window;
    //private $routeParams;
    private $stateParams;
    //private $mdDialog; //
    private $mdMedia;
    public model;
    public buttonText;
    public logIn;
   
    constructor($scope,/* $cookies, $route,*/ $http, $timeout, $window, /*$routeParams, $mdDialog, $mdMedia)*/ $stateParams) {
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
            //$http({
            //    url: '/api/data/loginEmail',
            //    method: 'POST',
            //    data: vm.model,
            //})
                .then(function (response) {
                
                if (response) { //response.data.value
                    console.log("There is response data when login", response.data.value);
                    if ($stateParams.ReturnUrl) {
                        $window.location.assign($stateParams.ReturnUrl);
                    } else {
                        $window.location.assign('/');
                    }
                } else {
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

}

export = AuthController;
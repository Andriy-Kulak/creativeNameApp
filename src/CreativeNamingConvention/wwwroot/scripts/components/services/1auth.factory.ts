class AuthFactory {
    'use strict';
    /*jshint latedef: nofunc */

    public static $inject = ['$http', '$q'];
    private $http;
    private $q;

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

        //public checkAuthFactory($http, $q) {
            public user;
            public service = {
                getLoggedInUser: this.getLoggedInUser
            };

            //return service;

            public getLoggedInUser($http, $q) {
                var deferred = $q.defer();
                if (typeof this.user === 'undefined') {
                    $http.get('/api/security/user/').then(function (res) {
                        this.user = res;
                        deferred.resolve(this.user);
                    });
                } else {
                    deferred.resolve(this.user);
                }
                return deferred.promise;
            }
        //}
}
export = AuthFactory;
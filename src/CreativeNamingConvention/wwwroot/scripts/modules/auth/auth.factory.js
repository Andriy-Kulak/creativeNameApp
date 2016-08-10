(function () {
    'use strict';
    /*jshint latedef: nofunc */
    define([], function () {
        angular
            .module('auth.factory', [])
            .factory('authFactory', factory);
        factory.$inject = ['$http', '$q'];
        function factory($http, $q) {
            var user;
            var service = {
                getLoggedInUser: getLoggedInUser
            };
            return service;
            function getLoggedInUser() {
                var deferred = $q.defer();
                if (typeof user === 'undefined') {
                    $http.get('/api/security/user/').then(function (res) {
                        user = res;
                        deferred.resolve(user);
                    });
                }
                else {
                    deferred.resolve(user);
                }
                return deferred.promise;
            }
        }
    });
})();
//# sourceMappingURL=auth.factory.js.map
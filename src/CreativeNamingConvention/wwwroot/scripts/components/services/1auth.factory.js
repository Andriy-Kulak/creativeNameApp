define(["require", "exports"], function (require, exports) {
    "use strict";
    var AuthFactory = (function () {
        function AuthFactory($http, $q) {
            this.service = {
                getLoggedInUser: this.getLoggedInUser
            };
            this.$http = $http;
            this.$q = $q;
        }
        //return service;
        AuthFactory.prototype.getLoggedInUser = function ($http, $q) {
            var deferred = $q.defer();
            if (typeof this.user === 'undefined') {
                $http.get('/api/security/user/').then(function (res) {
                    this.user = res;
                    deferred.resolve(this.user);
                });
            }
            else {
                deferred.resolve(this.user);
            }
            return deferred.promise;
        };
        /*jshint latedef: nofunc */
        AuthFactory.$inject = ['$http', '$q'];
        return AuthFactory;
    }());
    return AuthFactory;
});
//# sourceMappingURL=1auth.factory.js.map
define(["require", "exports"], function (require, exports) {
    "use strict";
    var Service = (function () {
        function Service($http, $q) {
            this.$http = $http;
            this.$q = $q;
        }
        Service.prototype.getParents = function () {
            return this.$http.get('/api/parents');
        };
        Service.prototype.getParentNames = function () {
            var deferred = this.$q.defer();
            this.getParents().then(function (res) {
                var data = res.data;
                var result = data.map(function (e) {
                    return e.name;
                });
                deferred.resolve(result);
            });
            return deferred.promise;
        };
        Service.$inject = [
            '$http', '$q'
        ];
        return Service;
    }());
    return Service;
});
//# sourceMappingURL=admin.service.js.map
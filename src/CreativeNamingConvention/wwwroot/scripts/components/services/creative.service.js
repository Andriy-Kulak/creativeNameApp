define(["require", "exports", '../../components/services/formModal.service'], function (require, exports, FormModalService) {
    "use strict";
    //service is responsible for containing logic related to calling the APIs for the creative API end-point.
    var CreativeService = (function () {
        function CreativeService($http, $q, ModalService) {
            this.postSuccess = false;
            this.$http = $http;
            this.$q = $q;
            this.FormModalService = FormModalService;
        }
        // post the creative name to back-end
        CreativeService.prototype.postCreativeName = function (creativeNameInfo) {
            return this.$http.post('/api/creativename', creativeNameInfo);
        };
        CreativeService.prototype.getCreativeNames = function () {
            return this.$http.get('/api/creativename');
        };
        CreativeService.prototype.getLOBs = function () {
            return this.$http.get('/api/lobs');
        };
        CreativeService.prototype.getVideoLengths = function () {
            return this.$http.get('/api/videolengths');
        };
        CreativeService.prototype.getMediaTypes = function () {
            return this.$http.get('/api/mediatypes');
        };
        CreativeService.prototype.getAbTestLabels = function () {
            return this.$http.get('/api/abtestlabels');
        };
        CreativeService.prototype.getCreativeVersions = function () {
            return this.$http.get('/api/creativeversions');
        };
        CreativeService.prototype.getIntendedScreens = function () {
            return this.$http.get('/api/intendedscreens');
        };
        CreativeService.prototype.getCreativeOps = function () {
            return this.$http.get('/api/creativeops');
        };
        CreativeService.prototype.getCreativeTypes = function () {
            return this.$http.get('/api/creativetypes');
        };
        CreativeService.prototype.getParents = function () {
            return this.$http.get('/api/parents');
        };
        CreativeService.prototype.getParentNames = function () {
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
        CreativeService.prototype.getMessages = function () {
            return this.$http.get('/api/messages');
        };
        CreativeService.prototype.getScreens = function () {
            return this.$http.get('/api/screens');
        };
        CreativeService.$inject = [
            '$http', '$q'
        ];
        return CreativeService;
    }());
    return CreativeService;
});
//# sourceMappingURL=creative.service.js.map
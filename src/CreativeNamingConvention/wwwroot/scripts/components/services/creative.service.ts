import MediaType = require('../../components/models/mediaType.model');
import Size = require('../../components/models/size.model');
import VideoLength = require('../../components/models/videoLength.model');
import FormModalService = require('../../components/services/formModal.service');
//service is responsible for containing logic related to calling the APIs for the creative API end-point.
class CreativeService {
    public static $inject = [
        '$http', '$q'
    ];
    private $http: ng.IHttpService;
    private $q: ng.IQService;
    public postSuccess: boolean = false;
    public FormModalService;

    constructor($http:ng.IHttpService, $q: ng.IQService, ModalService) {
        this.$http = $http;
        this.$q = $q;
        this.FormModalService = FormModalService;
    }

    // post the creative name to back-end
    public postCreativeName(creativeNameInfo) {
        return this.$http.post('/api/creativename', creativeNameInfo);
    }

    public getCreativeNames() {
        return this.$http.get('/api/creativename');
    }

    public getLOBs() {
        return this.$http.get('/api/lobs');
    }

    public getVideoLengths() {
        return this.$http.get('/api/videolengths');
    }

    public getMediaTypes() {
        return this.$http.get('/api/mediatypes');
    }

    public getAbTestLabels() {
        return this.$http.get('/api/abtestlabels');
    }

    public getCreativeVersions() {
        return this.$http.get('/api/creativeversions');
    }

    public getIntendedScreens() {
        return this.$http.get('/api/intendedscreens');
    }

    public getCreativeOps() {
        return this.$http.get('/api/creativeops');
    }

    public getCreativeTypes() {
        return this.$http.get('/api/creativetypes');
    }

    public getParents(){
      return this.$http.get('/api/parents');
    }

    public getParentNames(){
      var deferred = this.$q.defer();

      this.getParents().then(function(res){
        var data: Array<any> = <Array<any>> res.data;
        var result = data.map(function(e){
          return e.name;
        });
        deferred.resolve(result);
      });

      return deferred.promise;
    }

    public getMessages(){
      return this.$http.get('/api/messages');
    }

    public getScreens(){
      return this.$http.get('/api/screens');
    }


}

export = CreativeService;

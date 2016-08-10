class Service {
    public static $inject = [
        '$http', '$q'
    ];
    private $http: ng.IHttpService;
    private $q: ng.IQService;

    constructor($http:ng.IHttpService, $q: ng.IQService) {
        this.$http = $http;
        this.$q = $q;
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

}

export = Service;

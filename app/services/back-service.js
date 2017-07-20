angular.module('app')
  .factory('BackService', function ($q, $http,config) {
    var backService;
    var baseURI = config.serviceBaseURL;
    function getWelcomeText() {
      return $http.get(baseURI + '/tasks').then(function (response) {
        return response.data;
      });
    }

    return backService = {
      getWelcomeText: getWelcomeText
    };
  });
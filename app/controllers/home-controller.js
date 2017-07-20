angular.module('app')
  .controller('HomeController', function ($scope, BackService) {
    BackService.getWelcomeText()
      .then(function (response) {
        $scope.welcomes = response.data;
      });
  });
'use strict';

angular.module('oplApp.students', [])



.controller('StudentController', ['$scope', '$http', function($scope, $http) {
      $scope.subtitel = "Lijst van studenten";
      $http.get('frits.json')
          .success(function(data) {
        $scope.oplApp = data;
      })


}]);
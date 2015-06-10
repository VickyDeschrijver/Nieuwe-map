
'use strict';

angular.module('oplApp.students', [])




.controller('StudentController',['$scope', '$http', function($scope, $http) {
    $scope.subtitel    =   "Lijst studenten";
    $http.get('frits.json').succes(function(data) {
        $scope.oplApp = data;
    })

}]);

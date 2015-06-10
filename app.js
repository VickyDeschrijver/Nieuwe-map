'use strict';

// Declare app level module which depends on views, and components
angular.module('oplApp', [
  'ngRoute',
  'oplApp.students'
])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  $routeProvider
      .when('/students', {
        controller: 'StudentController',
        templateUrl: 'students/students.html'
      })
     /* .when('/student/:_id', {
        controller: 'StudentController',
        templateUrl: 'partials/student.html'
      })
      .when('/student/new', {
        controller: 'EditController',
        templateUrl: 'partials/studentform.html'
      })
      .when('/student/edit/:_id', {
        controller: 'EditController',
        templateUrl: 'partials/studentform.html'
      })
      .when('/opleiding/:_id', {
        controller: 'OplController',
        templateUrl: 'partials/opl.html'
      })
      .when('/opleiding/new', {
        controller: 'EditController',
        templateUrl: 'partials/oplform.html'
      })
      .when('/opleiding/edit/:_id', {
        controller: 'EditController',
        templateUrl: 'partials/oplform.html'
      })*/
      .otherwise({redirectTo:'/students'})
}])


    .controller('SiteController', ['$scope', function($scope) {
  $scope.titel  = "Opleidingen Taak JS Advanced";
}])

'use strict';

// declare app level module which depends on views and components
angular.module ('oplApp', [
    'ngRoute',
    'ngResource',
    'oplApp.students'

    /*'ui-utils',
    ,
    'oplApp.opleiding',
    'oplApp.services'*/
])

.config(['$routeProvider', function($routeProvider){
        $routeProvider
        $routeProvider
            .when('/', {
                controller: 'StudentController',
                templateUrl: 'default.html'
            })
            .when('/student/:_id', {
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
            })
            .otherwise({redirectTo:'/'})
    }])

.controller('SiteController',['$scope', function($scope) {
        $scope.titel    =   "Eindopdracht JS Advanced";
    }]);



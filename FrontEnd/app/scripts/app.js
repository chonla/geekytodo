'use strict';

angular.module('geekyTodoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl'
      })
      .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/main', {
            templateUrl: 'views/main.html',
            controller: 'CatagoryCtrl'
        })
      .otherwise({
        redirectTo: '/'
      });
  });

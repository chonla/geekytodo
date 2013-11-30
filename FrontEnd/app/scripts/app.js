'use strict';
var apiPrefix = location.protocol+'//'+location.hostname+':3000';
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
        templateUrl: 'views/signin.html',
        controller: 'LoginCtrl'
      })
      .when('/items', {
          templateUrl: 'views/viewtodo.html',
          controller: 'ItemCtrl'
      })
      .when('/main', {
          templateUrl: 'views/main.html',
          controller: 'CategoryCtrl'
      })
      .when('/item', {
        templateUrl: 'views/item.html',
        controller: 'ItemCtrl'
      })
      .when('/welcome', {
        templateUrl: 'views/registerresult.html',
        controller: 'RegisterResultCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });

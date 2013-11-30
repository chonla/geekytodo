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
      .otherwise({
        redirectTo: '/'
      });
  });

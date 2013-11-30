'use strict';

angular.module('geekyTodoApp')
  .controller('RegisterResultCtrl', function ($scope, $location) {
    $scope.status = $location.search()['status'];
    $scope.message = $location.search()['message'];

  });

'use strict';

angular.module('geekyTodoApp')
  .controller('ItemCtrl', function ($scope, ItemServices) {

    $scope.items = [

    ];

    $scope.listAll = function() {
      ItemServices.listAll().then(list_complete, list_error);
    };

    var list_complete = function(data) {
      console.log(data);
      $scope.items = data;
    };

    var list_error = function(data) {
      console.log(data);
    }

  });

'use strict';

angular.module('geekyTodoApp')
  .controller('ItemCtrl', function ($scope,ItemServices) {
    $scope.items = [
      {
        id: 1,
        title: "xxx",
        created_at: "yyyy/mm/dd"
      },
      {
        id: 2,
        title: "xxx",
        created_at: "yyyy/mm/dd"
      }
    ];

    // ItemServices.getItemsList().then(function(response)){
    //   $scope.items = response.data;
    // };
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

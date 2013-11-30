'use strict';

angular.module('geekyTodoApp')
  .controller('ItemCtrl', function ($scope, ItemServices) {

    // $scope.items = [
    //   {
    //     id: 1,
    //     title: "xxx",
    //     created_at: "yyyy/mm/dd"
    //   },
    //   {
    //     id: 2,
    //     title: "xxx",
    //     created_at: "yyyy/mm/dd"
    //   }
    // ];
    ItemServices.getItemsList().then( function(response){
      $scope.items = response.items;
    });

    $scope.addItem = function() {
      ItemServices.addItem($scope.title).then(
          function() {
            console.log("Added");
          }
        , function() {
          console.log("Failed");
        });
    };

  });

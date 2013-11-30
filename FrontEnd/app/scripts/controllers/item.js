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

    $scope.title = "";

    var _syncItem = function(response) {
      $scope.items = response.items;
    };

    var _listItem = function() {
      ItemServices.getItemsList().then(_syncItem);
    };    

    $scope.addItem = function() {
      ItemServices.addItem($scope.title).then(
          function() {
            $scope.title = "";
            _listItem();
          }
        , function() {
            console.log("Failed");
          });
    };

    _listItem();

  });

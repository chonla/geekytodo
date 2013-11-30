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

    var _addItemSuccessHandler = function() {
      $scope.title = "";
      _listItem();
    };

    var _addItemFailureHandler = function() {
      console.log("Failed");
    };

    $scope.addItem = function() {
      ItemServices.addItem($scope.title).then(_addItemSuccessHandler, _addItemFailureHandler);
    };

    _listItem();

  });

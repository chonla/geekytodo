'use strict';

angular.module('geekyTodoApp')
  .controller('ItemCtrl', function ($scope, $ItemServices) {

    $scope.items = [

    ];

    $scope.listAll = function() {

       $http.post('http://127.0.0.1:3000/api/users/signin',data).success(list_complete);
    };

    var list_complete = function(data) {
      console.log(data);
    };

  });

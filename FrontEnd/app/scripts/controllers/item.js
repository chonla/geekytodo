'use strict';

angular.module('geekyTodoApp')
  .controller('ItemCtrl', function ($scope, $ItemServices) {
    $scope.listAll = function() {

       $http.post('http://127.0.0.1:3000/api/users/signin',data).success(login_complete);
    };

    var login_complete = function(data) {
      console.log(data);
    };

  });

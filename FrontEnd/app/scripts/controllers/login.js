'use strict';

angular.module('geekyTodoApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.login = function() {
        var data = {
                    username:$scope.username, 
                    password:$scope.password
                    };
       $http.post('/geekytodo/api/users/signin',data).then(function(){
            alert("success");
       });
    }
  });

'use strict';

angular.module('geekyTodoApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.buttonDisable = true;
    $scope.login = function() {
        var data = {
                    username:$scope.username, 
                    password:$scope.password
                    };
       $http.jsonp('http://127.0.0.1:3000/api/users/signin',data).then(function(){
            alert("success");
       });
    }
    $scope.checkNull = function(){
        if ($scope.username && $scope.password) {
            $scope.buttonDisable = false;

        }

    }
  });

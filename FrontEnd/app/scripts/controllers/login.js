'use strict';

angular.module('geekyTodoApp')
  .controller('LoginCtrl', function ($scope, $http) {
    $scope.buttonDisable = true;
    $scope.login = function() {
        var data = {
                    username:$scope.username, 
                    password:$scope.password
                    };
       $http.post('http://127.0.0.1:3000/api/users/signin',data).success(login_complete);
    }

    $scope.checkNull = function(){
        if ($scope.username && $scope.password) {
            $scope.buttonDisable = false;

        }

    }

    var login_complete = function(data) {
      console.log(data);
    };

  });

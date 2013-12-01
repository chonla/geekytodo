'use strict';

angular.module('geekyTodoApp')
  .controller('LoginCtrl', function ($scope, $rootScope, $http, LoginServices, $location) {
    $scope.buttonDisable = true;
    $scope.username = "";
    $scope.password = "";

    $scope.login = function() {
      LoginServices.login($scope.username, $scope.password)
                  .then(_loginHandler, _loginFailureHandler);
    }

    $scope.logout = function() {
      LoginServices.logout();
    }

    $scope.checkNull = function(){
        if ($scope.username && $scope.password) {
            $scope.buttonDisable = false;

        }

    }

    var _loginHandler = function(data) {
      if (data.status == "SUCCESS") {
        $rootScope.token = data.token;
        $location.path('/items');
      } else {
        alert(data.message);
      }
    };

    var _loginFailureHandler = function(data) {
      console.log(data);
    };

  });

'use strict';

angular.module('frontEndApp')
  .controller('RegisterCtrl', function ($scope) {
    $scope.register = function(user){
    	console.log('test');
    	console.log(user.email);
    };
  });

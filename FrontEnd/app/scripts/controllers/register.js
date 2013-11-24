'use strict';

angular.module('geekyTodoApp')
  .controller('RegisterCtrl', function ($scope) {
  	
    $scope.error = {
      username : '',
      password : '',
      confirmPassword : '',
      email : '',
      mobileNumber : ''
    };

    $scope.register = function(user){
      $scope.error.username = '';
      $scope.error.password = '';
      $scope.error.confirmPassword = '';
      $scope.error.email = '';
      $scope.error.mobileNumber = '';

    	if(user!==undefined){
        console.log(user);
        (validateNull(user.username)) ? "" : setErrorMessage($scope.error, "username", "username is null or empty.");
        
        (validateNull(user.password)) ? "" : setErrorMessage($scope.error, "password", "password is null or empty.");
       
        (validateNull(user.confirmPassword)) ? "" : setErrorMessage($scope.error, "confirmPassword", "confirmPassword is null or empty.");
        
        if (!validateNull(user.password)) {
          setErrorMessage($scope.error, "password", "password is null or empty.")
        } else if (!validateNull(user.confirmPassword)) {
          setErrorMessage($scope.error, "confirmPassword", "confirmPassword is null or empty.");
        } else if (user.password !== user.confirmPassword) {
          setErrorMessage($scope.error, "password", "password is not equal confirm password.")
        }

        if(validateNull(user.email)){
           (validateEmail(user.email)) ? "" : setErrorMessage($scope.error, "email", "Invalid format email.");
        } else {
          setErrorMessage($scope.error, "email", "Email is null or empty.")
        }

        if(validateNull(user.mobileNumber)) {
          (validateMobileNumber(user.mobileNumber) ? "" : setErrorMessage($scope.error, "mobileNumber", "Invalid format mobile number."));
        } else {
           setErrorMessage($scope.error, "mobileNumber", "mobile number is null or empty.")
        }

      }else{
        setErrorMessage($scope.error, "username", "username is null or empty.");
    		console.log('null object');
    	}

    };

    var validateNull = function(str) {
      console.log(str);
      if (str === undefined || str === '') {
        return false;
      }
      return true;
    };

    var validateEmail = function(str) {
      var emailFormat = /\S+@\S+\.\S+/;
      return emailFormat.test(str);
    };

    var validateMobileNumber = function(str) {
      return (!isNaN(str)) && (str.length <= 10);
    };


    var setErrorMessage = function(str, field, msg) {
      if (field === 'username') {
        str.username = msg;
      } else if (field === 'password') {
        str.password = msg;
      } else if (field === 'confirmPassword') {
        str.confirmPassword = msg;        
      } else if (field === 'email') {
        str.email =  msg;
      } else if (field === 'mobileNumber') {
        str.mobileNumber =  msg;
      } 
    }


  });

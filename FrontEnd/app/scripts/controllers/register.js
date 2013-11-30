'use strict';

angular.module('geekyTodoApp')
  .controller('RegisterCtrl', function ($scope, signUpService, $location, $routeParams) {
    
    $scope.newRegister = true;
    $scope.registered = false;
    $scope.registerStatus = "SUCCESS";
    $scope.registerMessage = "";

    $scope.error = {
      username : '',
      password : '',
      confirmPassword : '',
      email : '',
      mobileNumber : ''
    };

    $scope.newUser = {
      username : '',  
      password : '',  
      email : '',   
      firstName : '', 
      lastName : '',  
      mobileNumber : ''
    };

    $scope.register = function(user){
      $scope.error.username = '';
      $scope.error.password = '';
      $scope.error.confirmPassword = '';
      $scope.error.email = '';
      $scope.error.mobileNumber = '';

    	if(user !== undefined){
        console.log(user);
        (validateNull(user.username)) ? ($scope.newUser.username = user.username) : setErrorMessage($scope.error, "username", "username is null or empty.");
        
        (validateNull(user.password)) ? "" : setErrorMessage($scope.error, "password", "password is null or empty.");
       
        (validateNull(user.confirmPassword)) ? "" : setErrorMessage($scope.error, "confirmPassword", "confirmPassword is null or empty.");
        
        if (!validateNull(user.password)) {
          setErrorMessage($scope.error, "password", "password is null or empty.")
        } else if (!validateNull(user.confirmPassword)) {
          setErrorMessage($scope.error, "confirmPassword", "confirmPassword is null or empty.");
        } else if (user.password !== user.confirmPassword) {
          setErrorMessage($scope.error, "password", "password is not equal confirm password.")
        } else {
          $scope.newUser.password = user.password;
        }

        if(validateNull(user.email)){
           (validateEmail(user.email)) ? ($scope.newUser.email = user.email) : setErrorMessage($scope.error, "email", "Invalid format email.");
        } else {
          setErrorMessage($scope.error, "email", "Email is null or empty.")
        }

        if(validateNull(user.mobileNumber)) {
          (validateMobileNumber(user.mobileNumber) ? ($scope.newUser.mobileNumber = user.mobileNumber) : setErrorMessage($scope.error, "mobileNumber", "Invalid format mobile number."));
        } else {
           setErrorMessage($scope.error, "mobileNumber", "mobile number is null or empty.")
        }

        $scope.newUser.firstName = user.firstName;
        $scope.newUser.lastName = user.lastName;

        // Check not error
        if ($scope.error.username === '' &&  
              $scope.error.password === '' &&  
              $scope.error.confirmPassword === '' &&  
              $scope.error.email === '' &&  
              $scope.error.mobileNumber === '') {
          
          // call sign up API
          var promise = signUpService.signup($scope.newUser);
          promise.then(function(data){
            console.log("RESULT = " + data.status + " : " + data.message);
            $scope.newRegister = false;
            $scope.registered = true;
            $scope.registerStatus = data.status;
            $scope.registerMessage = data.message;
            // $location.path('/welcome/?status=' + data.status + '&message=' + data.message);
          }, function(reason) {
            console.log("Error reason" + reason);
            $scope.newRegister = false;
            $scope.registered = true;
            $scope.registerStatus = reason.status;
            $scope.registerMessage = reason.message;
          });
          //$routeParams ==> {status: data.status, message: data.message};
          
        }else{
          console.log("there are some input error!!!");
        }

      }else{
        setErrorMessage($scope.error, "user", "user error.");
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
      return (!isNaN(str)) && (str.length > 0) && (str.length <= 12);
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

var geekyTodo = angular.module('geekyTodoApp');
geekyTodo.factory('signUpService', function($http) {
	var signupObject = function(data){
		debugger;
		var url = "http://54.254.28.194:3000/api/users/signup";
		return $http.post(url,data);
	};
	return {
		signup : signupObject
	}
});
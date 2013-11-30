var geekyTodo = angular.module('geekyTodoApp');

geekyTodo.factory('signUpService', function($http, $q) {
	// var signupObject = function(data){
	// 	debugger;
	// 	var url = "http://127.0.0.1:3000/api/users/signup";
	// 	return $http.post(url,data);
	// };

	var _signupObject = function(data) {
        var deferred = $q.defer();

        $http
            .post('http://127.0.0.1:3000/api/users/signup', {data:data})
            .success(function(data){
                console.log("qwerty" + data.status + " ==== " + data.message);
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;
    };

	return {
		signup : _signupObject
	}
});
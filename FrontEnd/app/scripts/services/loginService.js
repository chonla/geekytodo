'use strict';

angular.module('geekyTodoApp')
  .factory('LoginServices', function ($http, $q) {

    var server = apiPrefix+'/api/users/signin';
    //var server  = 'http://127.0.0.1:3000/api/users/signin';

    var _login = function(username, password) {
        var data = { username:username, 
                     password:password };
        return _post(server, data);
    };

    var _post = function(url, data) {
        var deferred = $q.defer();
        $http
            .post(url, data)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;
    };

    return {
        login : _login
    }

});

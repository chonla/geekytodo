'use strict';

angular.module('geekyTodoApp')
  .factory('LoginServices', function ($http, $q, $rootScope, $location) {
    //var server = 'http://54.254.28.194:3000/api/users/signin';
    var server = apiPrefix+'/api/users/signin';
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

    var _isLogin = function() {
        if (typeof($rootScope.token) != 'undefined' && $rootScope.token != '') {
            return true;
        }
        return false;
    };

    var _requireLogin = function() {
        if (!_isLogin()) {
            $location.path('/login');
        }
    };

    return {
        login : _login,
        isLogin : _isLogin,
        requireLogin : _requireLogin
    }

});

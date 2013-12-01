'use strict';

angular.module('geekyTodoApp')
  .factory('LoginServices', function ($http, $q, $rootScope, $location) {
    //var server = 'http://54.254.28.194:3000/api/users/signin';

    var cookieName = "geekytodo_token";

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
                _setCookie(cookieName,data.token);
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;
    };

    var _isLogin = function() {
        // if (typeof($rootScope.token) != 'undefined' && $rootScope.token != '') {
        console.log(_getCookie(cookieName));
        if(_getCookie(cookieName) != null) {
            return true;
        }
        return false;
    };

    var _requireLogin = function() {
        if (!_isLogin()) {
            $location.path('/login');
        } else {
            $location.path('/items');   
        }
    };

    var _getCookie = function(c_name) {
        var c_value = document.cookie;
        var c_start = c_value.indexOf(" " + c_name + "=");
        if (c_start == -1)
        {
            c_start = c_value.indexOf(c_name + "=");
        }
        if (c_start == -1)
        {
            c_value = null;
        }
        else
        {
            c_start = c_value.indexOf("=", c_start) + 1;
            var c_end = c_value.indexOf(";", c_start);
            if (c_end == -1)
            {
                c_end = c_value.length;
            }
            c_value = unescape(c_value.substring(c_start,c_end));
        }
        return c_value;
    };

    var _setCookie = function(c_name,value,exdays) {
        var exdate=new Date();
        exdate.setDate(exdate.getDate() + exdays);
        var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
        document.cookie=c_name + "=" + c_value;
    };

    var _delCookie = function(name) {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }

    var _logout = function() {
        _delCookie(cookieName);
        $location.path('/login');
    };

    _requireLogin();

    return {
        login : _login,
        requireLogin : _requireLogin,
        logout: _logout
    }

});

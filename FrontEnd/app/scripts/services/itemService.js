'use strict';

angular.module('geekyTodoApp')
  .factory('ItemServices', function ($http, $q) {

    var listAll = function() {
        var deferred = $q.defer();

        $http
            .get('http://127.0.0.1:3000/api/items')
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;
    };

    return {
        listAll : listAll
    }

  });

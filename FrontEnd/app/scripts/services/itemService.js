'use strict';

angular.module('geekyTodoApp')
  .factory('ItemServices', function ($http, $q) {
    //var server = 'http://54.254.28.194:3000/api/items/';
    var server  = 'http://127.0.0.1:3000/api/items';

    var _getItemsList = function(){

      // return $http(server).success(function(data, status){
      //   console.log(data);
      //   return data;
      // });

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
        listAll : listAll,
        getItemsList : _getItemsList
    }
  });

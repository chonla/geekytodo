'use strict';

angular.module('geekyTodoApp')
  .factory('ItemServices', function ($http, $q) {
    var server = apiPrefix+'/api/items/';
    var server_post = apiPrefix+'/api/item/';
    //var server  = 'http://127.0.0.1:3000/api/items';

    var _getItemsList = function(){

      // return $http(server).success(function(data, status){
      //   console.log(data);
      //   return data;
      // });

      var deferred = $q.defer();
        $http
            .get(server)
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;

    };

    var _addItem = function(title, category) {
        var deferred = $q.defer();

        $http
            .post(server_post, {title:title})
            .success(function(data){
                deferred.resolve(data);
            })
            .error(function(data){
                deferred.reject(data);
            });

        return deferred.promise;
    };

    return {
        getItemsList : _getItemsList,
        addItem : _addItem
    }
  });

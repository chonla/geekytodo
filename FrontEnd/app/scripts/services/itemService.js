'use strict';

angular.module('geekyTodoApp')
  .factory('ItemServices', function ($http) {
      //var server = 'http://54.254.28.194:3000/api/items/';
      var server  = 'http://127.0.0.1:3000/api/items/';
    var _getItemsList = function(){
      return $http(server).success(function(data, status){
        return data;
      });
    };

    return {
      getItemsList : _getItemsList
    }
  });

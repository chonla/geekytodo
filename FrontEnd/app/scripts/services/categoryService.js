'use strict';

angular.module('geekyTodoApp')
    .service('categoryService', function ($http, $q) {

    var getAllCategories = function() {
        var deferred = $q.defer();
        $http.get(
            apiPrefix+'/api/categories/'
            //'http://127.0.0.1:3000/api/categories/'
        ).success(function(data, status) {
                deferred.resolve(data);
            }).error(function(data, status) {
                deferred.reject();
            });

        return deferred.promise;
    };

    var createNewCategory = function(newCategory) {
        var deferred = $q.defer();
        $http.post(
            apiPrefix+'/api/category/',
            //'http://localhost:3000/api/category/',
             newCategory
        ).success(function(data, status) {
            deferred.resolve(data);
        }).error(function(data, status) {
            deferred.reject();
        });

        return deferred.promise;
    }

    return {
        create : createNewCategory,
        list   : getAllCategories
    }

 });
'use strict';

angular.module('geekyTodoApp')
    .controller('CatagoryCtrl', function ($scope) {
        $scope.register = function(user){
            console.log('test');
        };
        $scope.addTodo = function() {
            $scope.todos.push({text:$scope.todoText, done:false});
            $scope.todoText = '';
        };
        $scope.categoryList = [
            { id:1,
            name:'uncategorized'}];

        $scope.newCat= "";

        $scope.addCategory = function(){
            if($scope.newCat) {
                $scope.categoryList.push({id:$scope.categoryList.length+1,name:$scope.newCat});
            }
        };

        $scope.$watch('newCat',function(){
            if($scope.newCat.trim()){
                $scope.isAddDisabled = false;
            } else {
                $scope.isAddDisabled = true;
            }
        });

    });


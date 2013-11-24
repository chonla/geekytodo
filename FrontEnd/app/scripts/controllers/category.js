'use strict';

angular.module('geekyTodoApp')
    .controller('CategoryCtrl', function ($scope, categoryService) {
        $scope.register = function(user){
            console.log('test');
        };

        debugger;
        $scope.categoryList = categoryService.list();

        $scope.newCat= "";

        $scope.addCategory = function(){
            if($scope.newCat) {
                //$scope.categoryList.push({id:$scope.categoryList.length+1,name:$scope.newCat});
                categoryService.create({catName:$scope.newCat});
                $scope.categoryList =  categoryService.list();
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


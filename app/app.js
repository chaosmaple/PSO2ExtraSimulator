'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version',
  'myApp.data',
  'dndLists'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}])

.controller('mainController',['$scope','mainData',function($scope,mainData){
  //  dragable lists
    $scope.models = {
      selected: null,
      max: 8,
      lists: {
        "allExtras": [],
        "mainMat": [],
        "mat1": [],
        "mat2": [],
        "mat3": [],
        "mat4": [],
        "mat5": []
      }
    };

    $scope.models.lists.allExtras = mainData;

    //move handler
    //abort same extra in one material
    $scope.dropHandler = function(item,event){
      var datalist = angular.element(event.path[1]).attr('dnd-list');
      var currArr = $scope.$eval(datalist);

      var repeated = 0;
      var currLen = currArr.length;
      angular.forEach(currArr,function(o){
        if(item.id === o.id){
          repeated++;
        }
      });
      if(repeated > 0 || currLen >= 8){
        repeated = 0;
      } else{
        return item;
      }

    };
    //drop handler end
    //copy handler start
    $scope.copyHandler = function(index,event){

      var currId = event.path[5].id;
      var copyTo,copyFrom;

      switch (currId){
        case 'mat_1':
          copyTo = $scope.models.lists.mat1;
          break;
        case 'mat_2':
          copyTo = $scope.models.lists.mat2;
          break;
        case 'mat_3':
          copyTo = $scope.models.lists.mat3;
          break;
        case 'mat_4':
          copyTo = $scope.models.lists.mat4;
          break;
        case 'mat_5':
          copyTo = $scope.models.lists.mat5;
          break;
      }

      switch (index){
        case 0:
          copyFrom = $scope.models.lists.mainMat;
          break;
        case 1:
          copyFrom = $scope.models.lists.mat1;
          break;
        case 2:
          copyFrom = $scope.models.lists.mat2;
          break;
        case 3:
          copyFrom = $scope.models.lists.mat3;
          break;
        case 4:
          copyFrom = $scope.models.lists.mat4;
          break;
        case 5:
          copyFrom = $scope.models.lists.mat5;
          break;
      }

      angular.copy(copyFrom, copyTo);

    };

    //copy handler end
    //list style setting
    $scope.listStyle = {'height':'300px'};
    $scope.test = function(){
      console.log($scope.listStyle);
    }




  }]);
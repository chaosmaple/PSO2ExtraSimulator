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

  .factory('windowHeight',function(){
    var H = $(window).height();
    return H;
  })

.controller('mainController',['$scope',
    'mainData',
    'windowHeight',
    function($scope,mainData,windowHeight){
  //  draggable lists
  // ======================================================================
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
    //copy the data.js
    $scope.models.lists.allExtras = mainData;
    //  ====================================================================
    //move handler
    //abort same extra in one material
    $scope.dropHandler = function(item,event){


      var datalist = angular.element(event.path[1]).attr('dnd-list');
      var currArr = $scope.$eval(datalist);

      var repeated = 0;
      var categoryCount = 0;
      var currLen = currArr.length;

      angular.forEach(currArr,function(o){
        if(item.id === o.id){
          repeated++;
        }else if(o.category === '魂'|| o.category === 'fever'|| o.category === '异常'){
          categoryCount++;
        }


      });


      if(repeated > 0 || currLen >= 8){
        repeated = 0;
      } else{
        return item;
      }






    };
    //drop handler end
    //  ====================================================================
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
    //==========================================

      $scope.listStyle = {
        'height': (windowHeight - 200) + 'px',
        'overflow-y':'auto'
      };
      $scope.containerStyle = {
        'height': (windowHeight - 92) + 'px',
        'overflow-y':'auto'
      };

  //    ==========================================
  //    ab selection fn

      $scope.test = function(){

        var listMain = $scope.models.lists.mainMat;
        var list1 = $scope.models.lists.mat1;
        var list2 = $scope.models.lists.mat2;
        var list3 = $scope.models.lists.mat3;
        var list4 = $scope.models.lists.mat4;
        var list5 = $scope.models.lists.mat5;


        $scope.allAbs = listMain.concat(list1,list2,list3,list4,list5);

        $scope.chooseAbs = _.uniq($scope.allAbs,false,function(value){
          return value.id;
        });

        var cateCount = _.countBy($scope.allAbs,function(item){
          if(item.category === '塔') {
            return 'extreme';
          } else if (item.category === '魂') {
            return 'soul'
          } else if (item.category === '状态') {
            return 'status'
          } else if (item.category === '其他') {
            return 'othStatus'
          } else if (item.category === '异常') {
            return 'debuff'
          } else if (item.category === '抗性') {
            return 'resist'
          } else if (item.category === 'fever') {
            return 'fever'
          } else if (item.category === '特殊') {
            return 'Special'
          } else if (item.category === 'Others') {
            return 'Others'
          }
        });

        console.log(cateCount.soul);




      };
  //    test fn end
  //    ==========================================
  //  concat mat arrays





  }]);
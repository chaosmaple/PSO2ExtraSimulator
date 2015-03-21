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

      var datalist = angular.element(event.target.parentNode).attr('dnd-list');
      var currArr = $scope.$eval(datalist);

      var repeated = 0;
      var categoryCount = 0;
      var subCount = 0;


      var currLen = currArr.length;

      angular.forEach(currArr,function(o){
        if(item.id === o.id){
          repeated++;

        }else if(o.category === '魂' && item.category === '魂'|| o.category === '狂热'&& item.category === '狂热'|| o.category === '异常' && item.category === '异常'|| o.category === '塔' && item.category === '塔' || o.category === '特殊' && item.category === '特殊'){
          categoryCount++;
        }else if(o.sub && o.sub === item.sub){
          subCount++;
        }

      });


      if(repeated > 0 || categoryCount > 0 || subCount > 0 || currLen >= 8){
        repeated = 0;
        categoryCount = 0;
        subCount = 0;

        //$(event.target.parentNode.parentNode).popover({
        //  content: '不能再添加这种能力了!',
        //  placement: 'top',
        //  trigger: 'hover',
        //  delay: { "show": 500, "hide": 2000 }
        //}).popover('show');


      } else{

        categoryCount = 0;
        subCount = 0;
        return item;
      }


    };
    //drop handler end
    //  ====================================================================
    //copy handler start
    $scope.copyHandler = function(index,event){

      console.log(event.target.parentNode.parentNode.parentNode.parentNode.id)
      var currId = event.target.parentNode.parentNode.parentNode.parentNode.id;
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

      if(copyFrom.length !== 0) {
        angular.copy(copyFrom, copyTo)
      }else {
        alert('那里啥都没有哟')
      }



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

      //declare

      $scope.applyAbs = function(e){
        console.log(e)

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

        $scope.idCount = _.countBy($scope.allAbs,function(item){
          return item.id;
        });


        $scope.checkboxCtrl = function(item){

          return $scope.idCount[item.id] >= item.inherit?false:true;

        };

        $scope.needQty = function(item){
          var a = parseInt($scope.idCount[item.id],10);
          var b = parseInt(item.inherit,10);
          var c = b - a;

          return a >= b?'':'继承@' + c;
        };

        $scope.combineQty = function(item){
          var a = parseInt($scope.idCount[item.id],10);
          var b = _.isNumber(item.combine)?item.combine:false;
          var c = b - a;

          if(b == false || a >= b){
            console.log(item.id);
            console.log(item.id + 1);
            alert('sss');

            return ''
          } else{
            return '合成@' + c;
          }
        }


      };

      // has bug


  //    ==========================================
  //  concat mat arrays
  //  TODO还需要优化

      $scope.chosenAbs = [];

      $scope.checkChange = function(index,item,status){

        if(status === true) {
          $scope.chosenAbs.push(item)
        } else {
          angular.forEach($scope.chosenAbs,function(obj,key){
            if(obj.id === item.id){
              $scope.chosenAbs.splice(key,1);
            }
          })

        }
        console.log($scope.chosenAbs)

      }
      //
      //count RATE
      //    ==========================================
      //  concat mat arrays

      $scope.countRate = function(item){

        var count = 0;

        var rate = 0;

        angular.forEach($scope.allAbs,function(obj){
          if(obj.id === item.id) {
            count++;
          }

        });

        switch (item.category) {
          case '塔':
            (count >= 3) ? rate = 80:rate = 0;
        }


        return rate
      }




  }]);
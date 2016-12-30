/**
 * Created by Administrator on 2016/12/27.
 */
var app = angular.module('FirstApp',[]);
// ------------指向index-----该方式只能写一个模块-只能实例化一个控制器对象---------
app.controller('FristCtrl',['$scope',function ($scope) {
      $scope.showData=function () {
          alert($scope.data)
      }
}]);

//----------------指向index1---该方式可以写多个模块-实例化多个控制器对象----------
app.controller('FristCtrl',[function () {
        var self= this;
        self.showData=function () {
            alert(self.data);
        }
}]);
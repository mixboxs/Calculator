var myApp = angular.module('myApp', []);


    myApp.controller('TodoController', ['$scope','$rootScope', function($scope,$rootScope) {
      $scope.setNum1 = function()
      {
        $rootScope.num1 = $scope.num1;
        
      }
}]);


   


    myApp.controller('SecondController', ['$scope','$rootScope', function($scope,$rootScope) {
      $scope.setNum2 = function()
      {
      $rootScope.num2 = $scope.num2;
      }
}]);





    myApp.controller('ThirdController', ['$scope','$rootScope', function($scope,$rootScope) {
      $scope.getResult = function()
      {
        $scope.number1 = $rootScope.num1;
        $scope.number2 = $rootScope.num2;

        $scope.plus = function()
        {
          $scope.op = "+";
          $scope.result = $rootScope.num1*1 + $rootScope.num2*1
        }

         $scope.minus = function()
        {
          $scope.op = "-";
          $scope.result = $rootScope.num1*1 - $rootScope.num2*1
        }

        $scope.kun = function()
        {
          $scope.op = "*";
          $scope.result = $rootScope.num1*1 * $rootScope.num2*1
        }

        $scope.han = function()
        {
          $scope.op = "/";
          $scope.result = $rootScope.num1*1 / $rootScope.num2*1
        }
        
      }
}]);
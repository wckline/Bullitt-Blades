angular.module('myApp',[])
.controller('personController', ['$scope', function($scope) {
  $scope.price = 0;
  $scope.quantity = 0;
  
  
  $scope.total = function() {
    return $scope.acres * 92 + $scope.trees * 10;
  }
}]);
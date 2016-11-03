var app3 = angular.module('app3',[]);

app3.controller("glistctrl", function($scope){
  $scope.groceries=[{item: "tomatoes", purchased: false},{item: "potatoes", purchased: false},{item: "bread", purchased: false},{item: "milk", purchased: false}];

  $scope.getList= function(){
    return $scope.showList ? "ulgrocerylist.html" : "grocerylist.html"
  };
});

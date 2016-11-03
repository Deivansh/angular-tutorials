var app2 = angular.module("app2",[]);

app2.controller("ctrl1", function($scope){
  $scope.randomnum1= Math.floor((Math.random()*10)+1);
  $scope.randomnum2= Math.floor((Math.random()*10)+1);

});

app2.controller('badctrl', function($scope){
  var badfeelings = ["disregarded", "unimportant", "rejected", "powerless"];
  $scope.bad = badfeelings[Math.floor((Math.random()*4))];
});

app2.controller("gudctrl", function($scope) {
  var gudfeelings=["pleasure","awesome","lovable","inner peace"];
  $scope.gud=gudfeelings[Math.floor((Math.random()*4))];

});

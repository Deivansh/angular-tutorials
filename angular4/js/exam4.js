var app4 = angular.module('app4',[]);

app4.controller("eventctrl", function($scope){
  $scope.blur=0;
  $scope.click=0;
  $scope.dblclick=0;
  $scope.copy=0;
  $scope.paste=0;
  $scope.cut=0;
  $scope.focus=0;
  $scope.change=0;

  $scope.keydown= function(e){
    $scope.kdkey= String.fromCharCode(e.keyCode);
  };

  $scope.mouseenter=0;
  $scope.mouseleave=0;

  $scope.disablebutton=true;

  $scope.daytimebutton=true;

  $scope.capitals=[{city: 'New Delhi', state: 'delhi'}, {city: 'amritsar', state: 'punjab'}]

});

var app6 = angular.module("app6",[]);

app6.controller('heroctrl', function($scope, $rootScope){
  $scope.hero = [{realname: "Bruce Wayne", heroname:"Batman"}, {realname:"Clark Kent", heroname:"Superman"}];

  $scope.getherodata = function(){
    herosearch($scope.heroname);
  };
  function herosearch(name){
    $scope.herodata = "not found";
    for( var i =0; i<$scope.hero.length; i++){
      if($scope.hero[i].heroname===name){
        $scope.herodata = $scope.hero[i].realname + "is" + $scope.hero[i].heroname;
      }
    }
  }
  $scope.$on("heroupdated", function(event, args){
    $scope.hero.push({
      realname: args.realname, heroname: args.heroname
    });
  });
  $scope.addherodata = function(realname, heroname){
    $rootScope.$broadcast("heroupdated",{
      realname: realname, heroname: heroname
    });
    console.log("real: "+ realname + "hero: "+ heroname);
  };
});

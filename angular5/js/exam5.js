var app5 = angular.module('app5',[]);

app5.controller('glistctrl', function($scope){

  $scope.groceries=[{item: "tomatoes", purchased: false},{item: "potatoes", purchased: false},{item: "bread", purchased: false},{item: "milk", purchased: false}];

$scope.additem = function(newitem){
  if(!(newitem === undefined || newitem === ""))
  {
    $scope.groceries.push({
      item: newitem, purchased: false
    });
    $scope.missingnewitemerror = "";
  }
  else
    {
     $scope.missingnewitemerror = "Please enter an item";
    }

};
});

app5.controller('userctrl', function($scope){
  $scope.user=[{fname: "Devansh", lname:"Sharma", street:"888 dwarka new delhi", subscribe:"Subscribe", delivery:"Email"}];

  $scope.saveuser = function(userinfo){
    if($scope.userform.$valid){
      $scope.user.push({
        fname:userinfo.fname, lname:userinfo.lname, street:userinfo.street, subscribe: userinfo.subscribe, delivery: userinfo.delivery
      });
      console.log("user saved");
    }
    else{
      console.log("error: couldn't save user");
    }
  };
});

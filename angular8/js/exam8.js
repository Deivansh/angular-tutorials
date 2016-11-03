var app8 =  angular.module('app8', []);

app8.controller("mainctrl", function($scope){

  $scope.students=[
    {name: "geaorge thomas", gpa: 3.5},
    {name: "susy smith", gpa: 3.6},
    {name: "pail marks", gpa: 3.2},
    {name: "sue edgar", gpa: 3.8}
  ];

  $scope.student = {
    gpas: [
      {name:"geaorge thomas", gpa:3.5},
      {name:"susy smith", gpa:3.6},
      {name:"pail marks", gpa:3.2},
      {name:"sue edgar", gpa:3.8}
    ]
  };

  $scope.currdate = new Date();

  $scope.randomstr = "once a js file is successfully compiled into a class file.";

  $scope.randarray = [
    "tomato",
    "potato",
    "bread",
    "pickles",
    "raisins"
  ];

  $scope.weather=[
    {day:"monday", rain:false},
    {day:"tuesday", rain:true}
  ];

});

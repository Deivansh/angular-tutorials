var app7 = angular.module('app7',[]);

app7.controller('mainctrl', function(){
  this.name = "animal";
  this.sound = "Grrr";
  this.animalclick = function(){
    alert(this.name + "says" + this.sound);
  };
});

app7.controller('dogctrl', function($controller){
  var childctrl = this;
  childctrl.child= $controller('mainctrl',{});
  childctrl.child.name ="Dog";
  childctrl.child.bark="woof";
  childctrl.child.dogdata = function(){
    alert(this.name + "says" + this.sound + "and" + this.bark);
  }
});

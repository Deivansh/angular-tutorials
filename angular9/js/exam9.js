var app9 = angular.module("app9",[]);
app9.directive("jqlDirective", function(){
  return function(scope, element, attrs){
    var players = element.children();

    var listofplayers = "";
    for(i=0; i<players.length; i++){
      if(players.eq(i).text()=="Barry Bonds"){
        players.eq(i).css("color","red");
        players.eq(i).attr("number","25");
      }
      if(players.eq(i).text()=="Hank Aaron"){
        players.eq(i).addClass("thick");
      }
      listofplayers += players.eq(i).text() + ",";
      angular.element(document.querySelector('#childrenlist')).text(listofplayers);
    }
  }
})

app9.controller('mainctrl', function($scope){

});

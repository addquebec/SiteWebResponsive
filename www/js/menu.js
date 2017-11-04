/*jslint browser: true*/
/*global $, jQuery, alert*/

//$(document).ready(function(){
      //$(".fa-bars").on("click",function (){
          //document.getElementById("mySidenav").style.width = "250px";
          //$(".fa-bars").toggleClass("open");
          //console.log( "toggle open" );
      //});
    //$(".sidenav").on("click",function (){
        //document.getElementById("mySidenav").style.width = "0";
        //$(".fa-bars").toggleClass("close");
        //console.log( "toggle close" );
      //}); 
//});

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    $(".fa-bars").toggleClass("open");
    document.getElementById("main").style.marginLeft = "250px";
    document.getElementById("navid").background.marginLeft = "250px";
    
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    $(".fa-bars").toggleClass("close");
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("navid").style.marginLeft = "0";
}

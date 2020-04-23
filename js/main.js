$(document).ready(function(){

  $(".carousel").carousel();



    $("ul > li").mouseenter(function(){
  $(this).children(".sbsm").stop().slideDown(400);
});
$("ul > li").mouseleave(function(){
  $(this).children(".sbsm").stop().slideUp(100);
});



});

$(function() {

  $( '#mi-slider' ).catslider();

});

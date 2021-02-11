// Q10. Create a dropdown menu using hover method in jquery
/*
$(function(){
  $('.hoverli').hover(function(){
    $('.menu').css("display", "block");
    }, function(){
    $('.menu').css("display", "none");
  });
}
*/

$(function(){
    $('.hoverli').hover(function(){
      $('.menu').slideToggle('fast');
      });
})
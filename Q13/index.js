// Q13. Get the max height of elements using jquery each method
$(function(){
    $('li').each(function(index){
      console.log(index + ": "+$(this).css('height'));
    })
})

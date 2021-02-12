// Q12. We have bind a click funtion to parent div but we want stop it from performing when user clicks on its child li
$(function(){
    $('.container').on('click', function(){
      console.log('Div Clicked');
    });
    $('.q12 li').on('click', (event)=>{
      console.log('li Clicked');
      event.stopPropagation(); 
    });
})  
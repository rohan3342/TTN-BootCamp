// Q7. Bind a click function to an "click" element and append next "click" next to it.
$(function(){
    $('.q7a').on('click', function(){
      console.log('Button A Clicked');
      $('.q7b').trigger('click');
    })
    $('.q7b').on('click', function(){
      console.log('Button B Clicked');
    })
})
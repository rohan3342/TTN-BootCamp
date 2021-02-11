// Q11. On clicking on "google" tag. It is taking us to google home page. Stop it from happening.
$(function(){
    $('.go').on('click',(event)=>{
        console.log('Event Stop!!');
        event.preventDefault();
    });
})
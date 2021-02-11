// Q15. Retrive the data from server using ajax get call
$(function(){
    $.get('data.txt',function(data,status){
      $('.q15').html(`Data: ${data}`).css('display','block')
      console.log(`Status: ${status} \n\nData: ${data}`);
    });
  });
  
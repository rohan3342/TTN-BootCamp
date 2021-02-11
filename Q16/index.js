// Q16. Add cross button on row and bind click function which make a delete request to server, after success event remove the row from dom
$(function() {
    show_data();
    function delete_data() {
      $.ajax({
        url: '/data.txt',
        type: 'DELETE',
        success: function(data) {
          show_data();
        }
      });
    }
    
    function show_data() {
      $.get('/data.txt', function(data) {
        $('.q15').html(`Data: ${data}`).css('display','block');
        $('.cross').on('click', delete_data);
      });
    }
});
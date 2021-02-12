// Q15. Retrive the data from server using ajax get call
$(function(){
  let table_structure = [];
  $.ajax({url: "https://jsonplaceholder.typicode.com/users", async: true, 
    success: function(result) {
      let data = [...result];
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        table_structure += '<tr> <td>' + data[i].id + '</td> <td>' + data[i].name + '</td> <td>' +
          data[i].email + '</td> </tr>';
      }
      $('#users tbody').append(table_structure); 
    }
  });
});  

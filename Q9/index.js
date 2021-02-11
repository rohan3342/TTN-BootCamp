// Q9. Get dropdown selected value on onchanage event and append in div container
$('#q9').on('change',function(){
    let $x = $('option').filter(":selected").text();;
    $('.selected-value').text($x);
})
// Q14. Chagne color of every cell which has numbers larger than 10.
$(function(){
    $('.q14 tr td').each(function(){
        let $cell = $(this);
        if($cell.text() > 10){
            $cell.css('background','wheat');
        }
    })
})
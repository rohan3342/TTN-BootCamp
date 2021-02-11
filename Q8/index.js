// Q8. Click event not working on element which added dynamicly or via script, make it work using .on method
$(function(){
    let btn = $("<button id='click'>Question 8</button>");
    $(".q8").append(btn);
    $('#click').attr('class', 'click');
    $("#click").on("click",function(){
        console.log("Click Working");
    });
});
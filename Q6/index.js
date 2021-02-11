//Q6. After page load change the HTML of div element with "p" element
$(function () {
    $('.div-to-p').children('div').each(function () {
      $(this).replaceWith($('<p />', { text: $(this).text() }));
    });
});
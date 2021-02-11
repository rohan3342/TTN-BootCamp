// Q17. Create a image array and in div create a slide show to animate images of delay of 500ms.
let i = 0; 			
let images = ["asset/jqm.png","asset/jqui.png","asset/jqu.png"];	

function changeImg(){
    $('.slide').attr('src',`${images[i]}`);

    if(i < images.length - 1) i++; // Add 1 to Index
	else i = 0; // Reset Back To O

    setTimeout("changeImg()", 500);
}

window.onload=changeImg; // Run function when page loads
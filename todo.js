// alert('Connected')
    // if li is gray
// if($(this).css('color')==='rgb(128, 128, 128)'){
//     //change into black
//     $(this).css({
//         color: 'black',
//         textDecoration: 'none'
//     });}
// //else li is black
// else{
// //change into gray
// $(this).css({
//     color: '#808080',
//     textDecoration: 'line-through'
// });

// }
// 
$('ul').on('click','li',function(){
    $(this).toggleClass('gray')
})

//out
$('ul').on('click','span', function(event){
    $(this).parent().fadeOut(1000, function(){
        $(this).remove();
    });
    event.stopPropagation();
});
//get input
$('input').on('keypress',function(event){
    if(event.which === 13)
    {
        let newtodo=$(this).val()
        $(this).val('')
        $('ul').append(`<li><span>X</span> ${newtodo}</li>`)
    }
})
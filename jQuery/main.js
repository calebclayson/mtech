$('.additem').click(additem);

$('.myinput').on('keydown', function(event){
    // console.log(event.which);
    if(event.which === 13) {
        additem();
    }
});

$('.container').sortable({
    handle: ".handle"
});

function additem() {
    let myname = $('.myinput').val();
    $('.container').append(`<div class="row"><i class="handle fas fa-arrows-alt"></i><i class="trashcan fas fa-trash-alt"></i><span contenteditable="true">${myname}<span></div>`);
    $('.myinput').val('');
    let numchildren = $('.container').children().length;
    console.log(numchildren);
    $('.trashcan').click(function(){
        $(this).parent().animate({
            opacity: 0,
            left: "+=50"
        }, 800, function(){
            $(this).remove();
        });
    });
}

function clearlist() {
    $('.container').html('');
}

$('.clearlist').click(clearlist);


// $('.row').css('color','blue');
$('.row').addClass('graytext');

// $(document).ready(function(){

// }); //this code will only load once the page is done loading

// $(function(){

// }); //this does the same thing as up above ^s
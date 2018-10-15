let bob = function(){};

$(bob); // references the variable bob

$('.container').find('div').css('color','blue');

$('.myinput').on('keydown', function(event){
    console.log(event.which);
    if(event.which === 13) {
        additem();
    }
})


function additem() {
    let myname = $('.myinput').val();
    $('.container').append(`<div class="row"><span contenteditable="true">${myname}<span><i class="trashcan fas fa-trash-alt"></i></div>`);
    $('.myinput').val('');
    let numchildren = $('.container').children().length;
    console.log(numchildren);
    $('.trashcan').click(function(){
        $(this).parent().parent().parent().remove();
    })
}

function clearlist () {
    $('.row').remove();
}

// $('.row').css('color','blue');
$('.row').addClass('graytext');

// $(document).ready(function(){

// }); //this code will only load once the page is done loading

// $(function(){

// }); //this does the same thing as up above ^s
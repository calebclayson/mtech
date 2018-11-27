let bells = new Audio('bells.mp3');
let horse = new Audio('horse.mp3');
let name;

function naughtyNice(e){
    let randomNum = Math.floor(Math.random()*10);
    name = $(e).val();
    $('.name').html(name);
    $('.input-container').slideUp('fast');
    $('.showhide').slideDown('fast');
    if(randomNum < 5) {
        $('.result').html('naughty');
        $('.result').attr('id', 'naughty');
        horse.play();
        $('.result').effect("shake");
    } else {
        $('.result').html('nice');
        $('.result').attr('id', 'nice');
        bells.play();
    }
    
};
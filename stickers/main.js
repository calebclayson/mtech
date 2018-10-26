let active;
let picArray = ['frank', 'bat', 'hand', 'pumpkin', 'skull'];

function addSticker () {
    $('.sticker').removeClass('myActive');
    $('.text').removeClass('myActive');
    let randum = Math.floor(Math.random() * picArray.length);
    $('.card').append(`<div class="${picArray[randum]} sticker"></div>`);
    $('.sticker').draggable({
        containment: '.card',
        start: function () {
            $('.sticker').removeClass('myActive');
            $('.text').removeClass('myActive');
        },
        stop: function() {
            active = $(this);
            $(this).addClass("myActive");
        }
    });
    $('.sticker').resizable({
        aspectRatio: true,
        minWidth: 50,
        minHeight: 50,
        maxHeight: 250,
        maxWidth: 250
    })
}

function addText() {
    $('.sticker').removeClass('myActive');
    $('.text').removeClass('myActive');
    $('.card').append(`<div class="text">Halloween</div>`);
    $('.text').draggable({
        containment: '.card',
        start: function () {
            $('.sticker').removeClass('myActive');
            $('.text').removeClass('myActive');
        },
        stop: function() {
            active = $(this);
            $(this).addClass("myActive");
            $('.text-editor').val($(this).html());
        }
    });
}

function updateText(myText) {
    $(active).html(myText);
}

function deleteSticker () {
    $(active).remove();
}

function toFront() {
    $(active).css('z-index', '999');
}
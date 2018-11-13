(function(){
    $('.sign-in').hide();
})();

function login(e) {
    $('.logins').hide().fadeOut();
    $('.sign-in').show('slide').fadeIn();
    $('#login-name').html('');
    let newLoginName = $(e).find('.name').html();
    $('#login-name').html(newLoginName);
}

function goBack() {
    $('.logins').show().fadeIn();
    $('.sign-in').hide().fadeOut();
}
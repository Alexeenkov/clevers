$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu, .header__menu-background').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function() {
    $('.header__link').click(function(event) {
        $('.header__burger, .header__menu, .header__menu-background').removeClass('active');
        $('body').removeClass('lock');
    });
});
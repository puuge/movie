/*--menu-btn-fixed-when-scroll--*/
$(window).scroll(function () {
    if ($(document).scrollTop() > 20) {
        $('.navigation').addClass('fix-icon')
    }
    else {
        $('.navigation').removeClass('fix-icon');
    }

});

/*===popup-open============================*/
$(document).on('click', '.play-btn a', function () {
    $('.play').addClass('active-popup');

});

/*===popup-close===========================*/
$(document).on('click', '.close-movie', function () {
    $('.play').removeClass('active-popup');

});

/*==auto-play-when-popup-open=============*/
$('play-btn a').click(function () {
    $('#m-video')[0].play();
});

/*==close-video-when-popup-open=============*/
$('close-movie').click(function () {
    $('#m-video')[0].pause();
});
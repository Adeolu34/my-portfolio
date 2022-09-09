$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-circle-xmark');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load', function(){
        $('#menu').removeClass('fa-circle-xmark');
        $('header').removeClass('toggle');
    });
});

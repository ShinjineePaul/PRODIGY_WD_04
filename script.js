var typed = new Typed('#element', {
    strings: ['Web Developer', 'Competitive coder',"Web Designer"],
    typeSpeed: 70,
});
var typed = new Typed('#ele', {
    strings: ['Web Developer', 'Competitive coder',"Web Designer"],
    typeSpeed: 70,
});
$(document).ready(function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });
    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

$('a[href*="#"]').on('click',function(e){
e.preventDefault();
$('html,body').animate({
scrollTop:$($(this).attr('href')).offset().top,
},
500,
'linear'
);
});
});
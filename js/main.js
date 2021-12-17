"use strict";

(function($) {
    $('.navbar__collapse').click(() => {
        $('.navbar__menu').toggleClass('active');
    });

    ///////////////////////////
    // Smooth scroll
    $(".intro__scroll").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

    $('.gallery-js').owlCarousel({
        margin:30,
        loop:true,
        autoWidth:true,
        items:4
    })
    $('.exhibitions-js').owlCarousel({
        center: true,
        items:2,
        loop:true,
        margin:30,
        responsive:{
            600:{
                items:3
            }
        }
    })
})(jQuery)

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
        responsive:{
            0:{
                items:1,
            },
            600:{
                autoWidth:true,
            }
        }
    })
    $('.gallery-page-js').owlCarousel({
        margin:30,
        loop:true,
        nav: true,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                autoWidth:true,
            }
        }
    })
    $('.exhibitions-js').owlCarousel({
        center: true,
        items:2,
        loop:true,
        responsive:{
            0:{
                margin:10,
            },
            600:{
                margin:30,
                items:3
            }
        }
    })
    // swiper
    let swiper = new Swiper(".mySwiper", {
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
    });
    let swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        thumbs: {
            swiper: swiper,
        },
    });

    //BEGIN
    $(".accordion__title").on("click", function(e) {

        e.preventDefault();
        let $this = $(this);

        if (!$this.hasClass("accordion-active")) {
            $(".accordion__content").slideUp(400);
            $(".accordion__title").removeClass("accordion-active");
            $('.accordion__arrow').removeClass('accordion__rotate');
        }

        $this.toggleClass("accordion-active");
        $this.next().slideToggle();
        $('.accordion__arrow',this).toggleClass('accordion__rotate');
    });
    //END
})(jQuery)

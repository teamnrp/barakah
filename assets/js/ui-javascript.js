/* eslint-disable no-undef */
const dispatch = {

    productSlider() {
        $('.sliderBlock').slick({
            infinite: true,
            dots: false,
            arrows: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slide-arrow slick-prev material-icons-outlined"></button>',
            nextArrow: '<button class="slide-arrow slick-next material-icons-outlined"></button>',
            responsive: [
                {
                    breakpoint: 1450,
                    settings: {
                        dots: false,
                        arrows: true,
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 1100,
                    settings: {
                        dots: false,
                        arrows: true,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        dots: true,
                        arrows: false,
                        slidesToShow: 1,
                    },
                },
            ],
        });
    },

    productPage() {
        
        $('.productCard').each(function() {
            var maxHeight = 75;
            console.log($(this).find('.textBlock .text').height());
            const elHeight= $(this).find('.textBlock .text').height();
            if(elHeight < maxHeight) {
                $(this).find('.readMore').addClass('hide');
            }
        });
        $('.readMore').click(function() {
            $(this).toggleClass('active');
            $(this).closest('.slideContent').find('.textBlock').toggleClass('showText');
        })
    },

    mobileMenu() {
        $('.menuBtn').click(function(e) {
            e.stopPropagation();
            $(this).toggleClass('openMenu');
            $('body').toggleClass('openMenuBody');
            $('.navList').toggleClass('active');
        });
        $('.closeMenu').click(function(e) {
            e.stopPropagation();
            $('.menuBtn').removeClass('openMenu');
            $('body').removeClass('openMenuBody');
            $('.navList').removeClass('active');
        });
        // $('.mobileMenu').click(function(e) {
        //     e.stopPropagation();
        // });
        // $('body,html').click(function() {
        //     $('.menuBtn').removeClass('openMenu');
        //     $('body').removeClass('openMenuBody');
        //     $('.navList').removeClass('active');
        // });
    },

    init() {
        this.productSlider();
        this.mobileMenu();
        this.productPage()
    },
};

$(() => {
    dispatch.init();
});

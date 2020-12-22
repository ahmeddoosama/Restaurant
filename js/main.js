$(document).ready(function() {
    /* Nav button click event */
    let clicked = false;
    let $nav = $('nav');
    $nav.find('.nav-btn').click(function() {
        if(!clicked) {
            clicked = true;
            $nav.toggleClass('active');
            setTimeout(function() {
                clicked = false;
            }, 1450);
        }
    });

    /* Close Navbar when click anywhere in document */
    $(document).on('click', function(e){
        let clickOver = $(e.target);
        if(!clickOver.closest('nav').length && $nav.hasClass('active')) {
            $nav.removeClass('active')
        }
    });

    /* Scroll down */
    let $header = $('header');
    $(window).scroll(function() {
        if($(window).scrollTop() >= $header.height() - 500) {
            $nav.addClass('sticky')
        }else {
            $nav.removeClass('sticky')
        }
    });

    /* Slider Function */
    function menuSlider() {
        let $sliderContainer = $('.slider__container');
        let $slider = $sliderContainer.find('.menu__slider');
        let $sliderBanner = $sliderContainer.find('.slider__banner');
        let $sliderItems = $sliderBanner.find('.slider__item');
        let $nextBtn = $sliderContainer.find('.arrow.next');
        let $prevBtn = $sliderContainer.find('.arrow.prev');

        let itemsLength = $sliderItems.length;

        let slideToShow = 3;
        let activeSlides = slideToShow;

        function responsiveSlides() {
            if($(window).width() <= 991 && $(window).width() > 550){
                slideToShow = 2;
            }else if($(window).width() <= 550){
                slideToShow = 1;
            }
            else {
                slideToShow = 3;
            }
            
        }responsiveSlides();


        let itemsWidth;
        let itemWidth;

        $sliderItems.outerWidth(parseInt($slider.width() / slideToShow));

        function fixWidth(){
            itemWidth = $('.menu__slider .slider__item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth)
        }fixWidth();

        function leftCalc(){
            return itemWidth * itemMove;
        }

        $(window).resize(function(){

            responsiveSlides();

            $sliderItems.outerWidth(parseInt($slider.width() / slideToShow));
            fixWidth();
            $sliderBanner.css('left', -leftCalc());
        });

        let left = 0;
        let itemMove = 0;
        let clicked = false;

        /* Check btn status */
        function checkStatus(){
            if(activeSlides == itemsLength){
                $nextBtn.addClass('disabled')
            }else {
                $nextBtn.removeClass('disabled')
            }

            if(activeSlides == slideToShow){
                $prevBtn.addClass('disabled')
            }else {
                $prevBtn.removeClass('disabled')
            }
        }checkStatus();

        $nextBtn.click(function(){
            if(!clicked) {
                if (activeSlides != itemsLength) {
                    clicked = true;
                    itemMove++;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides++;
                    setTimeout(function(){
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        })

        $prevBtn.click(function(){
            if(!clicked) {
                if (activeSlides > slideToShow) {
                    clicked = true;
                    itemMove--;
                    left = -leftCalc();
                    $sliderBanner.css('left', left);
                    activeSlides--;
                    setTimeout(function(){
                        clicked = false;
                    }, 400);
                    checkStatus();
                }
            }
        })


    }menuSlider();

});
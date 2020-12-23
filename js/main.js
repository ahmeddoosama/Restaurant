$(document).ready(function() {

    'use strict';

    /* Loading Function */
    $(window).on('load', function () {
        $(".loader").delay(800).fadeOut();
    });

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

    /**
     *
        > Sliders Function
     *
    **/

    /* Menu Slider  */
    function menuSlider() {
        let $sliderContainer = $('.menu__slider');
        let $slider = $sliderContainer.find('.slider__group');
        let $sliderBanner = $sliderContainer.find('.slider__banner');
        let $sliderItems = $sliderBanner.find('.slider__item');
        let $nextBtn = $sliderContainer.find('.arrow.next');
        let $prevBtn = $sliderContainer.find('.arrow.prev');

        let itemsLength = $sliderItems.length;

        let slideToShow = 3;
        let activeSlides = slideToShow;

        function responsiveSlides() {
            activeSlides -= slideToShow;
            if($(window).width() <= 991 && $(window).width() > 550){
                slideToShow = 2;
            }else if($(window).width() <= 550){
                slideToShow = 1;
            }
            else {
                slideToShow = 3;
            }
            activeSlides += slideToShow;
        }responsiveSlides();


        let itemsWidth;
        let itemWidth;

        $sliderItems.outerWidth(parseInt($slider.width() / slideToShow));

        function fixWidth(){
            itemWidth = $('.slider__group .slider__item').outerWidth();
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

    /* Chief Slider */
    function chiefSlider() {
        let $sliderContainer = $('.chief__slider');
        let $slider = $sliderContainer.find('.slider__group');
        let $sliderBanner = $sliderContainer.find('.slider__banner');
        let $sliderItems = $sliderBanner.find('.slider__item');
        let $nextBtn = $sliderContainer.find('.arrow.next');
        let $prevBtn = $sliderContainer.find('.arrow.prev');

        let itemsLength = $sliderItems.length;

        let slideToShow = 1;
        let activeSlides = slideToShow;

        let itemsWidth;
        let itemWidth;

        $sliderItems.outerWidth(parseInt($slider.width() / slideToShow));

        function fixWidth(){
            itemWidth = $('.chief__slider .slider__item').outerWidth();
            itemsWidth = itemWidth * itemsLength;
            $sliderBanner.width(itemsWidth)
        }fixWidth();

        function leftCalc(){
            return itemWidth * itemMove;
        }

        $(window).resize(function(){

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


    }chiefSlider();

    // Scroll to Top
    let scrollButton = $("#scroll-top");

    $(window).scroll(function () {
        if ($(this).scrollTop() >= 200) scrollButton.show();
        else scrollButton.hide();
    });

    // Click On Button To Scroll Top
    scrollButton.on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
    });
});
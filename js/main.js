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
});
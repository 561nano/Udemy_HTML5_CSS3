$(document).ready(function () {

    /* If scrolling down past section-features add sticky class else remove sticky class*/
    /* TODO where does 'direction come from - jQuerry or Waypoint? */
    /* TODO change logo from black to white when dark mode is enable in the browser */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });

    /* Scroll on buttons */
    $(".js--scroll-to-plans").click(function () {
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    });

    $(".js--scroll-to-start").click(function () {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
    });

    /* Navigation scroll */
    $(function () {
        $('a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


});

/* This is a demo of waypoint formatting
var waypoints = $('#handler-first').waypoint(function(direction) {
notify(this.element.id + ' hit 25% from top of window')
}, {
offset: '25%'
*/
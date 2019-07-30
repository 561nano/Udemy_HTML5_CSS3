$(document).ready(function () {

    /* If scrolling down past section-features add sticky class else remove sticky class*/
    /* TODO where does 'direction come from - jQuerry or Waypoint? */
    $('.js--section-features').waypoint(function (direction) {
        if (direction === "down") {
            $('nav').addClass('sticky')
        } else {
            $('nav').removeClass('sticky')
        }
    }, {
        offset: '60px'
    });


});

/* This is a demo of waypoint formatting
var waypoints = $('#handler-first').waypoint(function(direction) {
notify(this.element.id + ' hit 25% from top of window')
}, {
offset: '25%'
*/
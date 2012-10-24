$(document).ready(function() {
    $('.b-stars').delegate('.b-stars__link', 'click', function(){
        $(this).prevAll('.b-stars__link').andSelf().css("background-position","0 0");
        $(this).nextAll().css("background-position","0 -17px");
    });
});
var width = Math.floor($(window).width());
var height = Math.floor($(window).height());
var area = (width * height) / 256;



$(document).ready(function() {
    for (i = 1; i < (area); i++) {
        $('#container').append('<div class="block"></div>');
    }
    $('.block').mouseenter(function() {
        $(this).css("background-color", "blue");
    })
    $('button').click(function() {
        $('.block').css("background-color", "initial");    
    })
});
var korkeus = prompt("How high the grid should be?");
var leveys = prompt("How wide the grid should be?");
var korkeus16 = (korkeus * 16);
var leveys16 = (leveys * 16);
leveys;
var yakseli = ($(window).height() / (korkeus * 16));
var xakseli = ($(window).width() / (leveys * 16));



var koko = Math.ceil(korkeus * leveys) + 1;


$(document).ready(function() {
    $('#container').css("height", korkeus16);
    $('#container').css("width", leveys16);
    $('#container').css("left", xakseli);
    $('#container').css("right", xakseli);
    $('#container').css("top", yakseli);
    $('#container').css("bottom", yakseli);
    for (i = 1; i < koko; i++) {
        $('#container').append('<div class="block"></div>');
    }
    $('.block').mouseenter(function() {
        $(this).css("background-color", "blue");
    })
    $('#clear').click(function() {
        $('.block').css("background-color", "initial");    
    })
});
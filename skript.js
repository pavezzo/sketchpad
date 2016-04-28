var width = Math.floor($(window).width());
var height = Math.floor($(window).height());
var area = (width * height) / 256;

// var koko = function() {
//     var korkeus = prompt("How high the grid should be?");
//     var leveys = prompt("How wide the grid should be?");
//     korkeus();
//     leveys();
//     if (korkeus < height && leveys < width) {  

//     }
// } 


$(document).ready(function() {
    for (i = 1; i < 1200; i++) {
        $('#container').append('<div class="block"></div>');
    }
    $('.block').mouseenter(function() {
        $(this).css("background-color", "blue");
    })
    $('button').click(function() {
        $('.block').css("background-color", "initial");    
    })
});
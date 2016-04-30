var newGrid = function() {
    var korkeus = prompt("How high the grid should be?");
    var leveys = prompt("How wide the grid should be?");
    var korkeus16 = (korkeus * 16);
    var leveys16 = (leveys * 16);
    var yakseli = ($(window).height() / (korkeus * 16));
    var xakseli = ($(window).width() / (leveys * 16));
    var koko = (korkeus * leveys) + 1;
    $('#container').css("height", korkeus16);
    $('#container').css("width", leveys16);
    $('#container').css("left", xakseli);
    $('#container').css("right", xakseli);
    $('#container').css("top", yakseli);
    $('#container').css("bottom", yakseli);
    for (i = 1; i < koko; i++) {
        $('#container').append('<div class="block"></div>');
    }    
};


$(document).ready(function() {
    newGrid();
    $('.block').mouseenter(function() {
        $(this).css("background-color", "blue");  
    })
    $('#clear').click(function() {
        $('.block').css("background-color", "initial");    
    })
    $('#new').click(function() {
        $('#container').empty();
        newGrid();
        $('.block').mouseenter(function() {
            $(this).css("background-color", "blue");
        })
        $('#clear').click(function() {
            $('.block').css("background-color", "initial");    
        })
    })
    $('#wildBrush').click(function() {
        $('.block').mouseenter(function() {
            var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
            $(this).css("background-color", randomColor);              
        })
    })
});

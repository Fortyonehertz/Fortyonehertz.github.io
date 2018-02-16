$(".dynamic-test").click(function() {
    if ($(".content-pane").css('background-color') == 'rgb(0, 0, 0)') {
        $(".content-pane").css('background-color', 'rgb(255,255,255)');
    } else {
        $(".content-pane").css('background-color', 'rgb(0, 0, 0)');
    }
    
});
let containerWidth = $('.container').width();

$(".triangle").css({
    "border-left": containerWidth / 2 + 'px outset transparent',
    "border-right": containerWidth / 2 + 'px outset transparent'
});
$(window).resize(function () {
    containerWidth = $('.container').width();
    $(".ttriangle").css({
        "border-left": containerWidth / 2 + 'px outset transparent',
        "border-right": containerWidth / 2 + 'px outset transparent'
    });
});

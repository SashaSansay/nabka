var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

function disableScroll() {
    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', preventDefault, false);
    window.onwheel = preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    window.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;
}

function enableScroll() {
    if (window.removeEventListener)
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.onmousewheel = document.onmousewheel = null;
    window.onwheel = null;
    window.ontouchmove = null;
    document.onkeydown = null;
}


$(function(){

    $('body').flowtype({
        minimum   : 320,
        minFont   : 14,
        maxFont   : 20  ,
        fontRatio : 80
    });
    $('.button--dropdown').click(function(e){
        var parent = $(this).closest('.dropdown');
        var menu = $('.dropdown__menu',parent);

        parent.toggleClass('dropdown--active');

        e.preventDefault();
    })

    $('[href="#[popup][soc]"]').click(function(){
        $('.section--popup').addClass('section--opened');
        disableScroll();
    });

    $('.section--popup').click(function(e){
        if (e.target !== this)
            return;
        $('.section--popup').removeClass('section--opened');
        enableScroll();
    })

    $(document).click(function(){
        $(".dropdown").removeClass('dropdown--active');
    });

    $(".dropdown").click(function(e){
        e.stopPropagation();
    });

});
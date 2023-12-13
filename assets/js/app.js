$(document).ready(function() {
    if (location.pathname == '/' ||
        location.pathname == '/index.html' ||
        location.pathname == '/shop.html') {
        $('#cat_list').removeClass('hide');
    }

    $('.zoom').mousemove(function(e) {
    const width = $(this).width();
    const height = $(this).height();

    const mouseX = e.pageX - $(this).offset().left;
    const mouseY = e.pageY - $(this).offset().top;
    
    const moveX = -(mouseX / width - 0.5) * 1.8 * 100;
    const moveY = -(mouseY / height - 0.5) * 1.8 * 100;

        $('.zoom img').css({
            'transform': `scale(1.8) translate(${moveX}%, ${moveY}%)`,
            'transform-origin': 'center center',
        });
    });

    $('.zoom').mouseleave(function() {
      $('.zoom img').css({'transform': 'scale(1)'});
    });
 
});
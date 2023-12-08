$(document).ready(function() {
    if (location.pathname == '/' ||
        location.pathname == '/index.html' ||
        location.pathname == '/shop.html') {
        $('#cat_list').removeClass('hide');
    }
});
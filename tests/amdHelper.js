require(['jquery', 'hoverIntent'], function($, hoverIntent) {
    hoverIntent($);
    console.log(
        ($.fn.hoverIntent) ? "test=success" : "test=failed"
    );
});

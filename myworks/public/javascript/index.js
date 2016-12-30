$(function () {
    $(window).scroll(function () {
        $("section").each(function() {
            var top = $(this).offset().top;
            var windowtop = $(window).innerHeight();
            var scrolltop = $("body").scrollTop();
            if ((windowtop + scrolltop - 500) > top) {
                $(this).addClass("gao")
            }
        });
    })
});
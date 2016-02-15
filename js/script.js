var $;
$(document).ready(function () {
    /* applyClickEvent */
    "use strict";
    function applyClickEvent() {
        $('a[href*=#]').on('click', function (e) {
            e.preventDefault();

            if ($($.attr(this, 'href')).length > 0) {
                $('html, body').animate({
                    scrollTop: $($.attr(this, 'href')).offset().top
                }, 500);
            }
            return false;
        });
    }
    applyClickEvent();
});

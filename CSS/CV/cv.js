
!(function ($) {
    "use strict";
    if ($('.typed').length) {
        var typed_strings = $(".typed").data('typed-items');
        typed_strings = typed_strings.split(',')
        new Typed('.typed', {
            strings: typed_strings,
            loop: true,
            typeSpeed: 100,
            backSpeed: 50,
            backDelay: 2000
        });
    }
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 1000
      });
})(jQuery);
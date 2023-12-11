$(function() {
    "use strict";
    /* ==========================================================================
    litebox
    ========================================================================== */

    $('.litebox-hero').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: 'v=',
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    });
});
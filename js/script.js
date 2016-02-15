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

    $('#tomo-popup').magnificPopup({
        items: [
            {
                src: "images/services/gallery/Tomorrowland/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/Tomorrowland/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/Tomorrowland/3.jpg",
                title: 'image three'
            },

            {
                src: "images/services/gallery/Tomorrowland/4.jpg",
                title: 'image four'
            },

            {
                src: "images/services/gallery/Tomorrowland/5.jpg",
                title: 'image five'
            },

            {
                src: "images/services/gallery/Tomorrowland/6.jpg",
                title: 'image six'
            },

            {
                src: "images/services/gallery/Tomorrowland/7.jpg",
                title: 'image seven'
            },

            {
                src: "images/services/gallery/Tomorrowland/8.jpg",
                title: 'image 8'
            },

            {
                src: "images/services/gallery/Tomorrowland/9.jpg",
                title: 'image nine'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#great').magnificPopup({
        items: [
            {
                src: "images/services/gallery/GreatGadsby/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/GreatGadsby/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/GreatGadsby/3.jpg",
                title: 'image three'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#pirate').magnificPopup({
        items: [
            {
                src: "images/services/gallery/PiratetheCaribian/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/PiratetheCaribian/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/PiratetheCaribian/3.jpg",
                title: 'image three'
            },

            {
                src: "images/services/gallery/PiratetheCaribian/4.jpg",
                title: 'image four'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#india').magnificPopup({
        items: [
            {
                src: "images/services/gallery/Indian/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/Indian/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/Indian/3.jpg",
                title: 'image three'
            },

            {
                src: "images/services/gallery/Indian/4.jpg",
                title: 'image four'
            },

            {
                src: "images/services/gallery/Indian/5.jpg",
                title: 'image five'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#never-land').magnificPopup({
        items: [
            {
                src: "images/services/gallery/Neverland/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/Neverland/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/Neverland/3.jpg",
                title: 'image three'
            },

            {
                src: "images/services/gallery/Neverland/4.jpg",
                title: 'image four'
            },

            {
                src: "images/services/gallery/Neverland/5.jpg",
                title: 'image five'
            },

            {
                src: "images/services/gallery/Neverland/6.jpg",
                title: 'image six'
            },

            {
                src: "images/services/gallery/Neverland/7.jpg",
                title: 'image seven'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });

    $('#alice').magnificPopup({
        items: [
            {
                src: "images/services/gallery/AliceInWonderland/1.jpg",
                title: 'image one'
            },

            {
                src: "images/services/gallery/AliceInWonderland/2.jpg",
                title: 'image two'
            },

            {
                src: "images/services/gallery/AliceInWonderland/3.jpg",
                title: 'image three'
            },

            {
                src: "images/services/gallery/AliceInWonderland/4.jpg",
                title: 'image four'
            },

            {
                src: "images/services/gallery/AliceInWonderland/5.jpg",
                title: 'image five'
            }
        ],

        gallery: {
            enabled: true
        },
        type: 'image' // this is a default type
    });




});

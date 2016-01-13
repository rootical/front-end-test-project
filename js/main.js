var divs = $('#img-center'),
    limit = 250; /* scrolltop value when opacity should be 0 */

$(window).on('scroll', function() {
    var w = window.innerWidth;
    var h = window.innerHeight;
    var st = $(this).scrollTop();

    /* avoid unnecessary call to jQuery function */
    if (w < 800) {
        divs.css({
            'opacity': (1 - st / limit)
        });
        if (st > 0) {
            $("#main-header").css("position", "fixed");
        } else {
            $("#main-header").css("position", "static");
        }

    }

    if (st > 0 && w < 1600) {
        $('.img-logo').show();
        $("header").css("z-index", "10000");
    };
});

var browser = {
    isIe: function() {
        return navigator.appVersion.indexOf("MSIE") != -1;
    },
    navigator: navigator.appVersion,
    getVersion: function() {
        var version = 999; // we assume a sane browser
        if (navigator.appVersion.indexOf("MSIE") != -1)
        // bah, IE again, lets downgrade version number
            version = parseFloat(navigator.appVersion.split("MSIE")[1]);
        return version;
    }
};

$(document).ready(function() {

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    var befeoreCornered;

    $('nav ul li').on('click', function() {

        $('nav ul  li.active').removeClass('active');
        if (browser.getVersion() <= 8) {
	        $(befeoreCornered).uncorner();
	    }
        $(this).addClass('active');
        if (browser.getVersion() <= 8) {
            $('.active').corner();
        }
        befeoreCornered = this;
        //alert(this);
    });


    if (browser.getVersion() <= 8) {
        $("head").append($("<link rel='stylesheet' href='/css/IE.css' type='text/css' media='screen' />"));
        $('.slick-prev').html("<img src='../images/arrow-left.png' style='margin-top:-40px' />");
        $('.slick-next').html("<img src='../images/arrow-right.png' style='margin-top:-40px' />");
    }
    if (browser.getVersion() <= 7) {
        $("head").append($("<link rel='stylesheet' href='/css/IE7.css' type='text/css' media='screen' />"));
    }


});

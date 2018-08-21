$(document).ready(function () {

    //ORIG FADE IN
    $("#bkgd").hide();
    $("#bio-pg").hide();
    $("#tour-pg").hide();
    $("#gallery-pg").hide();
    $("#music-pg").hide();
    $("#contact-pg").hide();
    $(".home-container").hide();
    $("li").hide();

    setTimeout(function () {
        $("#bkgd").css("visibility", "visible");
        $(".home-container").css("visibility", "visible");
        $(".section-cont").css("visibility", "visible");
    }, 250);

    setTimeout(function () {
        $(".home-container").fadeIn(2000);
        $("#bkgd").fadeIn(2000);
        menuFadeIns();
    }, 750);

    //RETURN HOME FUNCTION
    function homeContFadeIn() {
        $(".home-container").delay("slow").fadeIn(500);
    };

    //LEAVE HOME FUNCTION
    function homeContFadeOut() {
        $(".home-container").fadeOut(500);
        setTimeout(function () {
            $("li").hide();
        }, 1000);
    };

    //MENU TEXT FADES
    function menuFadeIns() {
        setTimeout(function () {
            $("#bio-link").fadeIn(500);
        }, 500);
        setTimeout(function () {
            $("#tour-link").fadeIn(500);
        }, 700);
        setTimeout(function () {
            $("#music-link").fadeIn(500);
        }, 900);
        setTimeout(function () {
            $("#gal-link").fadeIn(500);
        }, 1100);

        setTimeout(function () {
            $("#sdam-link").fadeIn(500);
        }, 500);
        setTimeout(function () {
            $("#instereo-link").fadeIn(500);
        }, 700);
        setTimeout(function () {
            $("#merch-link").fadeIn(500);
        }, 900);
        setTimeout(function () {
            $("#contact-link").fadeIn(500);
        }, 1100);
    };

    //ON CLICKS THAT OPEN MINI PAGES
    $("#bio-link").on("click", function () {
        $("#bio-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
        if ($(window).width() < 576) {
            $("body").css("height", "1100px");
        }
    });

    $("#tour-link").on("click", function () {
        $("#tour-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
        if ($(window).width() < 576) {
            $("body").css("height", "1100px");
        }
    });

    $("#gal-link").on("click", function () {
        $("#gallery-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
        if ($(window).width() < 576) {
            $("body").css("height", "2900px");
        }
    });

    //GALLERY DISPLAY IS CHANGED TO TRUE IF CLICKED ON
    var galDisp = false;
    $("#gallery-pg").on("click", function () {
        galDisp = true;
        console.log("Bootstrap gallery is visible.");
    });

    $("#music-link").on("click", function () {
        $("#music-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    $("#contact-link").on("click", function () {
        $("#contact-pg").delay("slow").fadeIn(500);
        homeContFadeOut();
    });

    //MAIN CLOSE BUTTON FUNCTION
    function mainCloseActions() {
        menuFadeIns();
        $("#bio-pg, #tour-pg, #gallery-pg, #music-pg, #contact-pg").fadeOut(500);
        homeContFadeIn();
        if ($(window).width() < 576) {
            $("body").css("height", "850px");
        }
    }

    //MOUSE CLICK CLOSE
    $(".close-button").on("click", function () {
        mainCloseActions();
    });

    //ESC KEY CLOSE
    $(document).on("keyup", function (e) {
        if (e.keyCode === 27 && galDisp === true) {
            galDisp = false;
        } else if (e.keyCode === 27 && galDisp === false) {
            mainCloseActions();
        } else if (e.keyCode === 27) {
            mainCloseActions();
        }
    });

    //EXTERNAL LINKS THAT OPEN IN NEW WINDOW
    $("#instereo-link").on("click", function () {
        window.open("http://instereorecordings.com");
    });

    $("#sdam-link").on("click", function () {
        window.open("http://soundcloud.com/djdanmusic/sd-podcast-ep124");
    });

    $("#merch-link").on("click", function () {
        window.open("http://redbubble.com/people/instereo");
    });

    //TOUR CALENDAR SCRIPT
    $.getScript("//widget.songkick.com/306806/widget.js")
        .done(function (script, textStatus) {
            console.log("Songkick script loaded!");
        })
        .fail(function (jqxhr, settings, exception) {
            console.log("Songkick script failed to load.");
            $("#tour-cont").html('<p style="text-align: center">Oops, looks like the Songkick Tourbox failed to load.</p><p style="text-align: center">Please refresh the page or try again later.</p>');
        });

});
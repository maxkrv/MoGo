$(function() {
    let header = $("#header");
    let intro = $("#intro").innerHeight();
    let scrollPos = $(window).scrollTop();

    // header
    function checkScroll() {
        if(scrollPos > intro) {
            header.addClass("fixed")
        } else {
            header.removeClass("fixed");
        }
    }

    checkScroll();

    $(window).on("scroll resize", function() {
        scrollPos = $(this).scrollTop();      
        checkScroll();
        $("#nav").removeClass("active");
        $("#burger").removeClass("active")
    });

    // scroll
    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;

        $("html, body").animate({
            scrollTop: elementOffset - 50
        }, 800);
    });

    // burger-menu
    $("#burger").on("click", function(e) {
        e.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    // accordion
});
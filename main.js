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

    $(window).on("scroll", function() {
        scrollPos = $(this).scrollTop();   
        $("#nav").removeClass("active");   
        checkScroll();
    });

    // scroll
    $("[data-scroll]").on("click", function(e) {
        e.preventDefault();

        let elementID = $(this).data("scroll");
        let elementOffset = $(elementID).offset().top;

        $("#burger").removeClass("active");
        $("#nav").removeClass("active");

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
    $("#accordion__item").on("click", function() {
        $(this).toggleClass("active");
    });

    $("#accordion__item1").on("click", function() {
        $(this).toggleClass("active");
    });

    $("#accordion__item2").on("click", function() {
        $(this).toggleClass("active");
    });
});

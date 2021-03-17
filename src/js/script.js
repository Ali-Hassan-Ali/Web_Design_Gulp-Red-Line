$("document").ready(function () {

    //click nav-link addClass and RemoveClass
    $(".nav-link").click(function () {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });

    //nice Scroll
    $("html").niceScroll({interval: 9e3});/*end of nice Scroll*/

    $('#OwlCarouse .owl-category').owlCarousel({
        loop: false,
        margin: 30,
        stagePadding: 50,
        nav: false,
        rtl: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            880: {
                items: 2
            },
            1000: {
                items: 3
            },
            1500: {
                items: 4
            },
            200: {
                items: 6
            }
        }
    })

});/*end of document ready*/


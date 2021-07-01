$("document").ready(function() {

    //click nav-link addClass and RemoveClass
    $(".nav-link").click(function() {
        $(".navbar-nav .nav-link").removeClass("active");
        $(this).addClass("active");
    });

    //on click nice scrollTop
    $("a").click(function() {
        var e = $(this).attr("href");
        $("html, body").animate({ scrollTop: $(e).offset().top }, 1e3);
    });

    //nice Scroll
    $("html").niceScroll({ interval: 9e3 }); /*end of nice Scroll*/

    //wow js
    new WOW().init();

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
            2000: {
                items: 6
            }
        }
    }); //end of owl Carouse

    //searching function
    $(document).ready(function() {
        $("#searching").hover(function() {
            $('.search-btn').toggleClass('btn btn-danger');
        });
    });

    //slider height full screen
    // $('.slider').height($(window).height());

    // $(window).resize(function() {

    //     $('.slider').height($(window).height());

    // });

    //change profile images
    $("#profileImage").click(function(e) {
        $("#imageUpload").click();
    });

    function fasterPreview(uploader) {
        if (uploader.files && uploader.files[0]) {
            $('#profileImage').attr('src',
                window.URL.createObjectURL(uploader.files[0]));
        }
    }

    $("#imageUpload").change(function() {
        fasterPreview(this);
    });



}); /*end of document ready*/



// $('body').append('<div id="loadingDiv" class="lds-ripple"><div></div><div></div></div>');

// $('body').append('<div style="" id="loadingDiv"><div class="loader">Loading...</div></div>');
// $(window).on('load', function() {
// setTimeout(removeLoader, 100000); //wait for page load PLUS two seconds.
// });

// function removeLoader() {
// $("#loadingDiv").fadeOut(10000, function() {
// fadeOut complete. Remove the loading div
// $('.lds-ripple').css('display', 'block');
// $('.lds-ripple').css('pozation', 'absloute');
// $("#loadingDiv").remove(); //makes page more lightweight 
// });
// }
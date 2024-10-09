(function ($) {
    'use strict';

    /*------------------------------------
          preloader Counter
      --------------------------------------*/

    // Hide the loader
    document.getElementById('loader').style.display = 'none';
    // Show the content
    document.getElementById('content').style.display = 'block';

    /*------------------------------------
          header sticky
      --------------------------------------*/

    document.addEventListener("DOMContentLoaded", function () {
        const header = document.querySelector(".header-area");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", function () {
            if (window.scrollY > lastScrollY) {
                // Scrolling down
                header.classList.add("hidden");
                $(".header-mega-menu").removeClass("active");
                $("#menuToggle").removeClass("active");
            } else {
                // Scrolling up
                header.classList.remove("hidden");
            }
            lastScrollY = window.scrollY;
        });
    });




    // /*------------------------------------
    //           sideBarMenu - All Pages
    //         --------------------------------------*/



    // $("#menuToggle").on("click", function () {
    //     $("#menuToggle").toggleClass("active");
    //     $(".header-mega-menu").toggleClass("active");
    // });




    /*------------------------------------
          Odometer Counter
      --------------------------------------*/

    $('.odometer').appear(function (e) {
        var odo = $(".odometer");
        odo.each(function () {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });



    /*------------------------------------
   venobox plugin
--------------------------------------*/

    $('.venobox').venobox();




    /*------------------------------------
            Ainmate On Scroll - index.html 
          --------------------------------------*/


    AOS.init({
        duration: 800,
        once: true,
    });



    /*------------------------------------
     Overlay Close
 --------------------------------------*/
    $(window).scroll(function () {
        if ($(this).scrollTop() !== 0) {
            $('#scrollUp').fadeIn();
        } else {
            $('#scrollUp').fadeOut();
        }
    });

    $('#scrollUp').on('click', function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });

    /*------------------------------------
     search modal open and close
 --------------------------------------*/
    document.getElementById('searchIcon').addEventListener('click', function () {
        const searchInput = document.getElementById('searchInput');
        const submitSearch = document.getElementById('submitSearch');
        const searchIcon = document.getElementById('searchImage');
        const closeIcon = document.getElementById('closeImage');

        // Toggle search input visibility
        if (searchInput.classList.contains('d-none')) {
            searchInput.classList.remove('d-none');
            submitSearch.classList.remove('d-none');
            searchIcon.classList.add('d-none');
            closeIcon.classList.remove('d-none');
            searchInput.focus();
        } else {
            searchInput.classList.add('d-none');
            submitSearch.classList.add('d-none');
            searchIcon.classList.remove('d-none');
            closeIcon.classList.add('d-none');
        }
    });


})(jQuery);


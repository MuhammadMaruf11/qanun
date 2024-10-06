
$(document).ready(function () {
    /*------------------------------------
   client review
     --------------------------------------*/
    const clientReview = document.querySelector('.client-review-active .swiper-container')
    // Slider With Thumbs
    if (jQuery(clientReview).length > 0) {
        let destinationSlider = new Swiper(clientReview, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 24,
            loop: true,

            autoplay: {
                delay: 3000,
            },

            a11y: false

        });
    }


    const clientReviewPrev = document.querySelector('.client-review-button .btn-prev');
    const clientReviewNext = document.querySelector('.client-review-button .btn-next');

    clientReviewPrev.addEventListener('click', () => {
        clientReview.swiper.slidePrev();
    });

    clientReviewNext.addEventListener('click', () => {
        clientReview.swiper.slideNext();
    })

    /*------------------------------------
      client review mobile 
     --------------------------------------*/


    const clientReviewMobile = document.querySelector('.client-review-active.mobile .swiper-container')
    // Slider With Thumbs
    if (jQuery(clientReviewMobile).length > 0) {
        let destinationSlider = new Swiper(clientReviewMobile, {
            // Optional parameters
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 12,
            loop: true,

            autoplay: {
                delay: 3000,
            },

            a11y: false

        });
    }


    const clientReviewMobilePrev = document.querySelector('.client-review-button.mobile .btn-prev');
    const clientReviewMobileNext = document.querySelector('.client-review-button.mobile .btn-next');

    clientReviewMobilePrev.addEventListener('click', () => {
        clientReviewMobile.swiper.slidePrev();
    });

    clientReviewMobileNext.addEventListener('click', () => {
        clientReviewMobile.swiper.slideNext();
    })
});

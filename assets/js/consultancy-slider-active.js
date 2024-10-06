/*------------------------------------
      feature slider - index.html 
     --------------------------------------*/
$(document).ready(function () {
    const featureSwiperContainer = document.querySelector('.consultancy-slide-active .swiper-container')
    // Slider With Thumbs
    if (jQuery(featureSwiperContainer).length > 0) {
        let destinationSlider = new Swiper(featureSwiperContainer, {
            // Optional parameters
            slidesPerView: 2,
            slidesPerColumn: 1,
            spaceBetween: 24,
            loop: true,
            centeredSlides: true,
            breakpoints: {
                320: {
                    slidesPerView: 1,
                },
                1024: {
                    slidesPerView: 2,
                },

            },
            // autoplay: {
            //     delay: 3000,
            // },

            a11y: false

        });
    }


    const featureBtnPrev = document.querySelector('.consultancy-slide-button .btn-prev');
    const featureBtnNext = document.querySelector('.consultancy-slide-button .btn-next');

    featureBtnPrev.addEventListener('click', () => {
        featureSwiperContainer.swiper.slidePrev();
    });

    featureBtnNext.addEventListener('click', () => {
        featureSwiperContainer.swiper.slideNext();
    })
});

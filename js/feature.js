var swiper = new Swiper('.section-feature .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 30,
    freeMode: true,
    grabCursor: true,
    setWrapperSize: true,
    slidesOffsetBefore: 30,
    autoheight: true,
    loop: true,
    loopFillGroupWithBlank: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});
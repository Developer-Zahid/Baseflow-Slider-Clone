const swiper = new Swiper(".tinyflow-slider", {
    slidesPerView: "auto",
    centeredSlides: true,
    slideToClickedSlide: true,
    lazy: true,
    autoplay: {
		disableOnInteraction: false,
	},
    keyboard: {
		enabled: true,
		onlyInViewport: true,
	},
    pagination: {
        el: ".tinyflow-slider__pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<button type="button" aria-label="pagination ${index+1}" class="tinyflow-slider__pagination__btn ${className}" style="--_progress: 0%;"></button>`;
        },
    },
    navigation: {
        nextEl: '[data-slider-arrow="next"]',
        prevEl: '[data-slider-arrow="prev"]',
    },
    breakpoints: {
        0: {
            centeredSlides: false,
        },
        668: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 4,
        },
        1700: {
            slidesPerView: 5,
        },
    },
    on: {
        beforeInit: function (swiper) {
            swiper.params.speed = swiper.el.dataset.speed * 1 || swiper.params.speed;
            swiper.params.autoplay.delay = swiper.el.dataset.autoplayDelay * 1 || swiper.params.autoplay.delay;
        },
        autoplayTimeLeft(swiper, time, progress) {
            updateProgress(swiper, progress);
        },
    },
});


function updateProgress(swiper, progress) {
    swiper.pagination.bullets.forEach(function (bullet, index) {
        if (index < swiper.activeIndex) {
            bullet.style.setProperty('--_progress', '100%');
        } else if (index === swiper.activeIndex) {
            bullet.style.setProperty('--_progress', (1 - progress) * 100 + '%');
        } else {
            bullet.style.setProperty('--_progress', '0%');
        };
    });
};
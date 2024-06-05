window.onload = function() {
    var swiper = new Swiper('.swiper-container', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      slidesPerView: 3,
      spaceBetween: 10
    });

    var swiperSlides = Array.from(swiper.slides);

    swiperSlides.forEach(function(slide) {
      openFullscreenSliderHandler(slide);
      closeFullscreenSliderHandler(slide);
    });

    function openFullscreenSliderHandler(slide) {
      var slideImage = slide.querySelector('img');

      slideImage.addEventListener('click', function() {
        var slideNumber = slide.dataset.swiperSlideIndex;
        openFullscreenSwiper(slideNumber);
      });
    }

    function openFullscreenSwiper(slideNumber) {
      swiper.el.classList.add('fullscreen');
      swiper.params.slidesPerView = 1;
      swiper.update();
      swiper.slideToLoop(parseInt(slideNumber, 10), 0);
    }

    function closeFullscreenSliderHandler(slide) {
      var slideNumber = slide.dataset.swiperSlideIndex;
      var backdrop = document.createElement('div');
      var closeButton = document.createElement('div');

      slide.appendChild(backdrop);
      slide.appendChild(closeButton);
      backdrop.classList.add('backdrop');
      closeButton.classList.add('close-button');
      closeButton.innerHTML = 'x';

      backdrop.addEventListener('click', function() {
        closeFullscreenSwiper(slideNumber);
      });

      closeButton.addEventListener('click', function() {
        closeFullscreenSwiper(slideNumber);
      });
    }

    function closeFullscreenSwiper(slideNumber) {
      swiper.el.classList.remove('fullscreen');
      swiper.params.slidesPerView = 3;
      swiper.update();
      swiper.slideToLoop(parseInt(slideNumber, 10), 0);
    }
  }
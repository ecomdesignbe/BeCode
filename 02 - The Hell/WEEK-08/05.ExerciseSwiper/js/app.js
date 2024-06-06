var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  grid: {
    rows: 3,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});
var swiper = new Swiper(".mywiper", {
  pagination: {
    el: "swiper-pagination",
    clickable: true,
    
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },

  },
});
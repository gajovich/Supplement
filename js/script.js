const swiper = new Swiper('.swiper-real', {
   direction: 'horizontal',
   loop: true,
   speed: 1000,
   pagination: {
      el: '.swiper-real__dots',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-real__arrow-next',
      prevEl: '.swiper-real__arrow-prev',
   },
});
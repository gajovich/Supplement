new Swiper('.swiper-real', {
   direction: 'horizontal',
   loop: true,
   speed: 1000,
   spaceBetween: 15,
   pagination: {
      el: '.swiper-real__dots',
      clickable: true,
   },

   navigation: {
      nextEl: '.swiper-real__arrow-next',
      prevEl: '.swiper-real__arrow-prev',
   },
});

new Swiper('.client__swiper', {
   direction: 'horizontal',
   loop: true,
   speed: 1000,
   spaceBetween: 15,
   pagination: {
      el: '.client__dots',
      clickable: true,
   },

  
});
document.querySelector('.icon-menu').addEventListener('click', function () {
   document.querySelector('.icon-menu').classList.toggle('active');
   document.querySelector('.menu__body').classList.toggle('active');
})

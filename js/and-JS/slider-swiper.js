const swiper = new Swiper('.main-slider__slider', {
   loop: true,
   parallax: true,

   centeredSlides: true,
   autoplay: {
      delay: 2000,
      disableOnInteraction: false,
   },
   navigation: {
      prevEl: '.main-slider__prev',
      nextEl: '.main-slider__next',
   },

   breakpoints: {
      220: {
         slidesPerView: 1,
      },
      480: {
         slidesPerView: 3,
      },
      750: {
         spaceBetween: 30,
         slidesPerView: 4,
      },
      970: {
         slidesPerView: 5,
         spaceBetween: 50
      }
   },

   speed: 1200,
   // pagination: {
   //    el: '.controll-main-block__dots',
   //    clickable: true,
   // },
   on: {
      //   init: function (swiper){
      //     const AllSlider = document.querySelector('.fraction-controll__all')
      //     AllSlider.innerHTML = swiper.slides.length - 2 < 10 ? `0${swiper.slides.length - 2}` : swiper.slides.length - 2;
      //   },
      //   slideChange: function (swiper){
      //     const CurentSlider = document.querySelector('.fraction-controll__current')
      //     CurentSlider.innerHTML = swiper.realIndex + 1 < 10 ? `0${swiper.realIndex + 1}` : swiper.realIndex  + 1;
      //   },
   },
});
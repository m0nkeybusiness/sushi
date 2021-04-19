jQuery(document).ready(function ($) {
   $('.carousel__inner').slick({
      dots: true,
      speed: 300,
      prevArrow:
         '<button type="button" class="slick-prev arrow"><img src="assets/images/slider_parts/prev-slide.webp"></button>',
      nextArrow:
         '<button type="button" class="slick-next arrow"><img src="assets/images/slider_parts/next-slide.webp"></button>',
      responsive: [
         {
            breakpoint: 600,
            settings: {
               arrows: false,
               dots: true,
            },
         },
      ],
   });
});

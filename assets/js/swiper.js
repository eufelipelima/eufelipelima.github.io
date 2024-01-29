var swiper = new Swiper('.swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    slidesOffsetBefore: 0,
    speed: 800,
    spaceBetween: '-3%',
    slidesPerView: 10,
    centeredSlides: true,
    paginationClickable: true,
    effect: 'coverflow',
    coverflow: {
      rotate: 0,
      stretch: 0,
      depth: 50,
      modifier: 3,
      slideShadows : false
    },
    loop: true,
    simulateTouch: true,
    mousewheelControl: false
  });

  
  $(document).ready(function(){
    
    $('.swiper-wrapper .swiper-slide:not(.swiper-slide-active)').on('click', function(e){
      e.preventDefault();
      swiper.slideTo($(this).index());
      return false;
    });
  });
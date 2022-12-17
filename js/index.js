
var options = {
    strings: ['Ach. Faisol S. Arifin'],
    stringsElement: null,
    typeSpeed: 60,
    startDelay: 1000,
    backSpeed: 50,
    backDelay: 2500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: "<i style='font-weight:normal;color:rgba(0,0,0,0.5);'>_</i>",
    contentType: 'html'

};

var typed = new Typed('.typed', options);

var swiper = new Swiper(".cardSwipper", {
  slidesPerView: 5,
  spaceBetween: 30,
  loop: true,
  autoplay: {
      delay: 1
  },
  freeMode: true,
  grabCursor: true,
  speed: 10000,
  freeModeMomentum: false
});

// Initialize Swiper
var swiper = new Swiper(".imageSwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide: 2,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
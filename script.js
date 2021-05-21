/* BODYMOVIN */
const animation = bodymovin.loadAnimation({
  container: document.getElementById("lottie"), // Required
  path: "lottie/developper.json", // Required
  renderer: "svg", // Required
  loop: true, // Optional
  autoplay: true, // Optional
});

/* AOS */
AOS.init();

/* SWIPER */

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

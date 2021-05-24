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

/* LAXXX */

lax.init();

// Add a driver that we use to control our animations
lax.addDriver("scrollY", function () {
  return window.scrollY;
});

// Add animation bindings to elements
lax.addElements(".selector", {
  scrollY: {
    translateX: [
      ["elInY", "elCenterY", "elOutY"],
      [0, "screenWidth/2", "screenWidth"],
    ],
  },
});

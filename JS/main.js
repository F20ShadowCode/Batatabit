const coinsCompany = document.querySelector(
  ".coins__contentGraphics--companys"
);
const coinsComisions = document.querySelector(
  ".coins__contentGraphics--comisions"
);

const arrows = document.querySelectorAll(".coins__arrow");

// Slider
arrows.forEach((item) => {
  item.addEventListener("click", () => {
    coinsComisions.classList.toggle("coins__contentGraphics--active");
    coinsCompany.classList.toggle("coins__contentGraphics--translate");
  });
});

// Slider utilizando la librería swiperJs
const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 40,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 1024px
    1024: {
      enabled: false,
    },
  },
});

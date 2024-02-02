const coinsCompany = document.querySelector(".coins--companys");
const coinsComisions = document.querySelector(".coins--comisions");

const arrows = document.querySelectorAll(".coins__arrow");

// Slider
arrows.forEach((item) => {
  item.addEventListener("click", () => {
    coinsComisions.classList.toggle("coins--comisions--active");
    coinsCompany.classList.toggle("coins--translate");
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
});

$(document).ready(function () {
  $(".testimonials-items").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    variableWidth: true,
    centerMode: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: "40px",
          variableWidth: false,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 425,
        settings: {
          dots: true,
          variableWidth: true
        },
      },
    ],
  });
});

const input = document.querySelector(".footer-form__input");
const submitBtn = document.querySelector(".footer-form__btn");
const validationText = document.querySelector(".footer-form__validation");

submitBtn.addEventListener("click", function () {
  if (input.checkValidity() === false || input.value === "") {
    validationText.style.display = "block";
  } else {
    validationText.style.display = "none";
  }
});

const header = document.querySelector(".header-top")
const burgerBtn = document.querySelector(".header-burger");
const menu = document.querySelector(".header-menu");
const backdrop = document.querySelector(".backdrop");
const about = document.querySelector(".about");
const links = document.querySelectorAll(".header-menu__item");

burgerBtn.addEventListener("click", function () {
  burgerBtn.classList.toggle("clicked");
  menu.classList.toggle("visible");
  backdrop.classList.toggle("visible");
});

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    if (backdrop.classList.contains("visible")) {
      backdrop.classList.remove("visible");
    }
    burgerBtn.classList.remove("clicked");
    menu.classList.remove("visible");
  });
}


var pos =
  about.getBoundingClientRect().top - document.body.getBoundingClientRect().top;

window.addEventListener("scroll", function () {
  if (document.documentElement.scrollTop > pos) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

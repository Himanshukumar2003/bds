var swiper = new Swiper(".client-slider", {
  speed: 1000,
  slidesPerView: 2,
  loop: true,
  allowTouchMove: true,
  autoplay: {
  delay: 0,
  disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
    },
    600: {
      slidesPerView: 2,
    },
    480: {
      slidesPerView: 1,
    },
  },
});

var swiper = new Swiper(".testimonial-slider", {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

var swiper = new Swiper(".photogallery-slider", {
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



$(function () {
  $(".popup-youtube").magnificPopup({
    disableOn: 700,
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});


const openMenu = document.querySelector('.open-menu');
const closeMenu = document.querySelector('.close-menu');
const mobileNavbar = document.querySelector('.mobile-navbar');

openMenu.addEventListener('click', () => {
  mobileNavbar.classList.add('active');
});


closeMenu.addEventListener('click', () => {
  mobileNavbar.classList.remove('active');
});

const goToTopBtn = document.getElementById("top-button");
window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    goToTopBtn.style.opacity = "1";
  } else {
    goToTopBtn.style.opacity = "0";
  }
});


goToTopBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


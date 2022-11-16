import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import SmoothScroll from "smooth-scroll";
const refs = {
    menuButton: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]'),
    nav: document.querySelector('.nav__link')
};
console.log(refs.nav)
refs.menuButton.addEventListener('click', () => {
    refs.menuButton.classList.toggle("is-active");
  refs.mobileMenu.classList.toggle("is-open");

});
// refs.nav.addEventListener('click', () => {
//     refs.menuButton.classList.toggle("is-active");
//     refs.mobileMenu.classList.toggle("is-open");
//   // if (window.innerWidth <= 767) {
    
//   // }
// })
// Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    refs.mobileMenu.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });


let galleryNew = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
const checkbox = document.querySelector('.glide')
const glide = new Glide('.glide', {
  hoverpause: true,
  autoplay: 2000,
    perView: 4,
  breakpoints: {
    1024: {
      perView: 2
    },
    600: {
      perView: 1
    }
  },
})

checkbox.addEventListener('change',  () => {
  glide.update({
    hoverpause: true,
  })
})

glide.mount();

const scroll = new SmoothScroll('a[href*="#"]');
import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import "@glidejs/glide/src/assets/sass/glide.theme.scss";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
import SmoothScroll from "smooth-scroll";
const refs = {
    menuButton: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]')
};

refs.menuButton.addEventListener('click', () => {
    refs.menuButton.classList.toggle("is-active");
    refs.mobileMenu.classList.toggle("is-open");
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
import Glide from "@glidejs/glide";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import SimpleLightbox from "simplelightbox";
import 'simplelightbox/dist/simple-lightbox.min.css';
const refs = {
    menuButton: document.querySelector('[data-menu-button]'),
    mobileMenu: document.querySelector('[data-menu]')
};

refs.menuButton.addEventListener('click', () => {
    refs.menuButton.classList.toggle("is-active");
    refs.mobileMenu.classList.toggle("is-open");
});


let galleryNew = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
new Glide('.glide').mount();
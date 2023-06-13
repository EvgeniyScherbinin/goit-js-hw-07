import { galleryItems } from './gallery-items.js';
// Change code below this line //

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => 
`<li class="gallery__item">
  <a class="gallery__link" href= ${original}>
    <img
      class="gallery__image"
      src= ${preview}
      data-source= ${original}
      alt= "${description}"
    />
  </a>
</li>`
);

galleryContainer.insertAdjacentHTML('beforeend', markup.join(" "));

new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250, });
import { galleryItems } from './gallery-items.js';

// Change code below this line

const galleryItemsEl = document.querySelector('.gallery');
const cardsGallery = createImageCards(galleryItems);

galleryItemsEl.insertAdjacentHTML('beforeend', cardsGallery);
galleryItemsEl.addEventListener('click', onContainer);

function createImageCards(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
      
    return `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"   
    />
  </a>
</li>`
  }).join('');
};


function onContainer(evt) {
  evt.preventDefault();
  if (evt.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt="${evt.target.alt}" />
  `);

  instance.show();
};

console.log(galleryItems);
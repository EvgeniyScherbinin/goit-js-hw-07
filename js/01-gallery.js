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
    if (evt.target.nodeName !== "BUTTON") {
      return;
    }

    const imageUrl = evt.target.dataset.source;

    const modalImage = document.querySelector('.basicLightbox img');
  modalImage.src = imageUrl;
  
    const instance = basicLightbox.create(`
    <div class="modal">
      <img src="${imageUrl}" width="800" height="600">
    </div>
  `);
    instance.show();
  };


  let gallery = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: '250',
  });
  gallery.on('show.simplelightbox', function (evt) {	
    // console.log(evt);
  });
  gallery.on('close.simplelightbox', function (evt) {	
    // console.log(evt);
  });
  
// console.log(galleryItems);

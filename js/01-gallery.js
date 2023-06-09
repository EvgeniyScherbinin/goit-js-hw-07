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
    if (!evt.target.classList.contains('gallery__image')) {
      return;
    }
  
    const instance = basicLightbox.create(`
      <img src="${evt.target.dataset.source}" width="800" height="600">
    `);
  
    instance.show();
  };


  let gallery = new SimpleLightbox('.gallery__link', {
    captionsData: 'alt',
    captionDelay: '250',
  });
  gallery.on('show.simplelightbox', function (evt) {	
    console.log(evt);
  });
  gallery.on('close.simplelightbox', function (evt) {	
    console.log(evt);
  });
  
console.log(galleryItems);

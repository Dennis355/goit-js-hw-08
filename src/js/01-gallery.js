// Add imports above this line
import { galleryItems } from './gallery-items';

import "simplelightbox/dist/simple-lightbox.min.css";
import simpleLightbox from 'simplelightbox';
// import { galleryItems } from './gallery-items.js';

console.log (galleryItems);


const imgGalleryEl = document.querySelector('.gallery');
const markupGallery = createMarkUp(galleryItems);
imgGalleryEl.innerHTML = markupGallery;


function createMarkUp(galleryItems) {
    return galleryItems
        .map((item) => {
            return `<div class ="gallery__item">
        <a class="gallery__link" href="${item.original}">
        <img class="gallery__image" 
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"/>
        </a>
        </div>`
        }).join("");
}


new simpleLightbox('.gallery a', {
    captionData: 'alt',
    captionPosition: 'button',
    captionDalay: 250,
});

console.log(galleryItems);



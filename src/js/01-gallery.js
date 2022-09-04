// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import '../css/common.css';
import '../css/01-gallery.css';

const containerRef = document.querySelector('.gallery');
function galleryMakeCards(items) {
    return items.map(item =>
        `<a class="gallery__item" href=${item.original}>
    <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a>`
    ).join('');
} 
const elements = galleryMakeCards(galleryItems);
containerRef.innerHTML = elements;

containerRef.addEventListener('click', onImgClick, {once: true});

function onImgClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
    return;
    }
    let lightbox = new SimpleLightbox('.gallery a', {
        captionType: "alt",
        captionsData: "alt",
        captionDelay: 250,
    });
}

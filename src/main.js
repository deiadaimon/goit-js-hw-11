import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { createGalleryMarkup } from './js/render-functions';
import { fetchRequest } from './js/pixabay-api';

const form = document.querySelector('.form');
const loader = document.querySelector('.loader');
loader.style.display = 'none';
const gallery = document.querySelector('.gallery');
const lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
});

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    gallery.innerHTML = '';
    loader.style.display = 'block';
    const inputValue = event.currentTarget.elements.input.value;

    fetchRequest(inputValue)
        .then(data => {
            loader.style.display = 'none';
            if (!data.hits.length) {
                iziToast.error({
                    message:
                        'Sorry, there are no images matching your search query. Please, try again!',
                    messageColor: '#fafafb',
                    messageSize: '16px',
                    messageLineHeight: '1.5',
                    backgroundColor: '#ef4040',
                    position: 'topRight',
                });
            }

            return data;
        })

        .then(data => {
            gallery.innerHTML = createGalleryMarkup(data.hits);
            lightbox.refresh();
            form.reset();
        })

        .catch(error => {
            loader.style.display = 'none';
            iziToast.error({
                message:
                    'Sorry, there are no images matching your search query. Please, try again!',
                messageColor: '#fafafb',
                messageSize: '16px',
                messageLineHeight: '1.5',
                backgroundColor: '#ef4040',
                position: 'topRight',
            });
        });
}
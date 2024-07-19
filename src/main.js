import { makeRequest } from './js/pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './js/render-fuctions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const elements = {
  form: document.querySelector('.js-searchForm'),
  serchInput: document.querySelector('.js-searchInput'),
  searchBtn: document.querySelector('.js-searchBtn'),
  imagesList: document.querySelector('.js-imagesList'),
  loader: document.querySelector('.loader'),
};

const params = {
  q: '',
  page: 1,
  per_page: 15,
  maxPage: 0,
};
elements.form.addEventListener('submit', handlerSubmit);

async function handlerSubmit(evt) {
  evt.preventDefault();
  elements.imagesList.innerHTML = '';
  params.page = 1;

  params.q = elements.serchInput.value.trim();

  if (!params.q) {
    iziToast.warning({
      title: 'Поле запиту - пусте',
      message: 'Заповніть поле',
      position: 'topRight',
    });
    elements.form.reset();
    return;
  }

  try {
    const { total, hits } = await makeRequest(params);
    const createItem = createMarkup(hits);

    const imj = await makeRequest(params);
    console.log(imj);
    params.maxPage = Math.ceil(total / params.per_page);

    elements.imagesList.insertAdjacentHTML('afterbegin', createItem);

    const OpenGallery = new SimpleLightbox('.js-imagesList a', {
      captions: true,
      captionType: 'attr',
      captionsData: 'alt',
      captionPosition: 'bottom',
      captionDelay: 250,
    });

    OpenGallery.on('show.simplelightbox', evt => {
      evt.preventDefault();
    });
    OpenGallery.refresh();
  } catch (err) {
    iziToast.error({
      title: 'Сталася помилка',
      message: `${err}`,
    });
  } finally {
    elements.form.reset();
  }
}

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
  loadMoreBtn: document.querySelector('.js-loadMore-btn'),
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
      title: 'The query field is empty',
      message: 'Fill in the field',
      position: 'topRight',
    });
    elements.form.reset();
    return;
  }

  try {
    const { total, hits } = await makeRequest(params);

    elements.loader.style.display = 'none';

    params.maxPage = Math.ceil(total / params.per_page);

    createMarkup(hits);

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

    if (hits.length > 0 && hits.length !== total) {
      elements.loadMoreBtn.style.display = 'block';
      elements.loadMoreBtn.addEventListener('click', handlerClick);
    } else {
      elements.loadMoreBtn.style.display = 'none';
    }

    if (!hits.length) {
      iziToast.warning({
        message: 'Nothing was found for your request',
        position: 'topRight',
      });
    }
  } catch (err) {
    iziToast.error({
      title: 'An error occurred',
      message: `${err}`,
      position: 'topRight',
    });
  } finally {
    elements.form.reset();
  }
}

async function handlerClick(evt) {
  params.page += 1;
  elements.loadMoreBtn.style.display = 'none';
  elements.loader.style.display = 'inline-block';

  try {
    const { hits } = await makeRequest(params);
    elements.loader.style.display = 'none';
    createMarkup(hits);

    const itemCard = document.querySelector('.js-item-imagesList');
    const heightItem = itemCard.getBoundingClientRect().height;

    window.scrollBy({
      top: heightItem * 2,
      behavior: 'smooth',
    });
  } catch (err) {
    iziToast.error({
      title: 'An error occurred',
      message: `${err}`,
      position: 'topRight',
    });
  } finally {
    elements.loadMoreBtn.style.display = 'block';
    if (params.page === params.maxPage) {
      elements.loadMoreBtn.style.display = 'none';
      elements.loadMoreBtn.removeEventListener(('click', handlerClick));
      iziToast.warning({
        message: "We're sorry, but you've reached the end of search results.",
        position: 'topRight',
      });
    }
  }
}

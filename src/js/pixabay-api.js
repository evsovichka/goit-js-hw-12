import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkup } from './render-fuctions';
import { elements } from '../main';
import axios, { Axios } from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/';
const ENDPOINT = 'api';
const KEY = '44929551-fd3f3fb9d8ead760ff0c5783d';

export async function makeRequest({ q = '', page = 1, per_page = 15 } = {}) {
  elements.loader.style.display = 'inline-block';
  return axios
    .get(`${ENDPOINT}`, {
      params: {
        key: KEY,
        q,
        page,
        per_page,
      },
    })
    .then(({ data }) => data);
}

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SlimSelect from 'slim-select';
import 'slim-select/styles';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';
const elements = {
  selecta: document.querySelector('.breed-select'),
  cardCat: document.querySelector('.card-cat'),
  loder: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};
elements.selecta.addEventListener('change', handlerInfoCat);
function handlerInfoCat(event) {
  elements.loder.removeAttribute('hidden', 'hidden');
  fetchCatByBreed(event.target.value)
    .then(data => {
      elements.cardCat.innerHTML = createMarkup(data);
      elements.loder.setAttribute('hidden', 'hidden');
      if (!data[0]) {
        elements.cardCat.innerHTML;
        iziToast.show({
          title: 'Oops! Something went wrong! Try reloading the page!',
        });
      }
    })
    .catch(err => {
      elements.loder.setAttribute('hidden', 'hidden');
      iziToast.show({
        title: 'Oops! Something went wrong! Try reloading the page!',
      });
      elements.cardCat.innerHTML;
    });
}

function createOption(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

fetchBreeds()
  .then(data => {
    elements.selecta.insertAdjacentHTML('afterbegin', createOption(data));
    elements.loder.setAttribute('hidden', 'hidden');
    new SlimSelect({
      select: '#multiple',
    });
  })

  .catch(err =>
    iziToast.show({
      title: 'Oops! Something went wrong! Try reloading the page!',
    })
  );

function createMarkup(arr) {
  return arr
    .map(
      ({ breeds, url }) => `
    <li class="list">
        <img width="400" src="${url}" alt="${breeds[0].name}"/>
        <h2>${breeds[0].name}</h2>
        <p>${breeds[0].description}</p>
        <h3>Temperament: ${breeds[0].temperament}</h3>
      </li>`
    )
    .join('');
}

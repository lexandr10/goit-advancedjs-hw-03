const elements = {
  select: document.querySelector('.breed-select'),
  cardCat: document.querySelector('.card-cat'),
  loder: document.querySelector('.loader'),
  error: document.querySelector('.error'),
};

elements.select.addEventListener('change', handlerInfoCat);

function handlerInfoCat(event) {
  elements.loder.removeAttribute('hidden', 'hidden');
  serviceGetInfoCat(event.target.value)
    .then(data => {
      elements.cardCat.innerHTML = createMarkup(data);
      elements.loder.setAttribute('hidden', 'hidden');
    })
    .catch(err => {
      elements.loder.setAttribute('hidden', 'hidden');
      elements.error.removeAttribute('hidden', 'hidden');
      elements.cardCat.innerHTML;
    });
}

function createOption(arr) {
  return arr
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');
}

function serviceCat() {
  const MAIN_API = 'https://api.thecatapi.com/v1';
  const PAR = '/breeds';
  const API_KEY =
    'live_F1JswQHNXiab7OVBGWFCkT3vt4fZPImj8AOcBIs0fZYYk71ryO1jOZAeb8WeRARW';
  const params = new URLSearchParams({
    api_key: API_KEY,
  });
  return fetch(`${MAIN_API}${PAR}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}
serviceCat()
  .then(data => {
    elements.select.insertAdjacentHTML('afterbegin', createOption(data));
    elements.select.style.display = 'block';
    elements.loder.setAttribute('hidden', 'hidden');
  })

  .catch(err => console.log(err));

function serviceGetInfoCat(idCat) {
  const MAIN_API = 'https://api.thecatapi.com/v1';
  const PAR = '/images/search';
  const API_KEY =
    'live_F1JswQHNXiab7OVBGWFCkT3vt4fZPImj8AOcBIs0fZYYk71ryO1jOZAeb8WeRARW';
  const params = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: idCat,
  });
  return fetch(`${MAIN_API}${PAR}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

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

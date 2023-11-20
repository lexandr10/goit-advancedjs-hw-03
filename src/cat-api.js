export function fetchBreeds() {
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
export function fetchCatByBreed(breedId) {
  const MAIN_API = 'https://api.thecatapi.com/v1';
  const PAR = '/images/search';
  const API_KEY =
    'live_F1JswQHNXiab7OVBGWFCkT3vt4fZPImj8AOcBIs0fZYYk71ryO1jOZAeb8WeRARW';
  const params = new URLSearchParams({
    api_key: API_KEY,
    breed_ids: breedId,
  });
  return fetch(`${MAIN_API}${PAR}?${params}`).then(resp => {
    if (!resp.ok) {
      throw new Error(resp.statusText);
    }
    return resp.json();
  });
}

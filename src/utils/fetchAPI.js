const URL_BASE = 'https://rickandmortyapi.com/api';

/**
 * Utility to access the rick and morty api
 * @param {string} path - path after the base url
 * @return {Promise} - request's promise
 */
export default function fetchAPI(path) {
  return (
    fetch(`${URL_BASE}${path}`)
      .then(response => {
        if (!response.ok) throw response;
        return response.json();
      })
      .then(data => {
        if (!data) throw new Error('Empty response');
        return data;
      })
      // eslint-disable-next-line no-console
      .catch(error => console.error(error))
  );
}

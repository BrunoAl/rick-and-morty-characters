const URL_BASE = 'https://rickandmortyapi.com/api';

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

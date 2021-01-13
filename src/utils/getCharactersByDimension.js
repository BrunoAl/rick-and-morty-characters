import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';

export default function getCharactersByDimension(dimensionName, dispatch) {
  dispatch({ type: 'start' });
  fetchAPI(`/location?dimension=${dimensionName}`)
    .then(data => {
      if (!data || !data?.results[0]?.residents) throw new Error('Empty resonse');
      const charactersId = getCharactersIdFromUrls(data?.results[0]?.residents);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: 'success', results: charactersData });
        })
        .catch(error => dispatch({ type: 'error', error }));
    })
    .catch(error => dispatch({ type: 'error', error }));
}

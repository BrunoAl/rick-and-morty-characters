import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';
import { actionTypes } from './getDataReducer';

function serializeResults(results) {
  if (!Array.isArray(results)) {
    return [results];
  }
  return results;
}
export default function useGetCharactersByLocation(episodeName, dispatch) {
  dispatch({ type: actionTypes.start });
  fetchAPI(`/location?name=${episodeName}`)
    .then(data => {
      if (!data || !data?.results[0]?.residents) throw new Error('Empty response');
      const charactersId = getCharactersIdFromUrls(data?.results[0]?.residents);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: actionTypes.success, results: serializeResults(charactersData) });
        })
        .catch(error => dispatch({ type: actionTypes.error, error }));
    })
    .catch(error => dispatch({ type: actionTypes.error, error }));
}

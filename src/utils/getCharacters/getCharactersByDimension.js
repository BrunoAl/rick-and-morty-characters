import fetchAPI from '../fetchAPI';
import getCharactersIdFromUrls from '../getCharactersIdFromUrls';
import { actionTypes } from '../getDataReducer';
import serializeResults from '../serializeResultFromAPI';

/**
 * Fetches characters by dimension
 * @param {string} dimensionName - name of the dimension
 * @param {func} dispatch - useReducer dispatch function to update the application state
 */
export default function getCharactersByDimension(dimensionName, dispatch) {
  if (!dimensionName) return;
  dispatch({ type: actionTypes.start });
  fetchAPI(`/location?dimension=${dimensionName}`)
    .then(data => {
      const residents = data?.results[0]?.residents;
      if (!residents || residents.length === 0) throw new Error('Empty resonse');
      const charactersId = getCharactersIdFromUrls(residents);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: actionTypes.success, results: serializeResults(charactersData) });
        })
        .catch(error => dispatch({ type: actionTypes.error, error }));
    })
    .catch(error => dispatch({ type: actionTypes.error, error }));
}

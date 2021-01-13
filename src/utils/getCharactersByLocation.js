import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';
import { actionTypes } from './getDataReducer';
import serializeResults from './serializeResultFromAPI';

/**
 * Fetches characters by location
 * @param {string} locationName - name of the location
 * @param {func} dispatch - useReducer dispatch function to update the application state
 */
export default function useGetCharactersByLocation(locationName, dispatch) {
  dispatch({ type: actionTypes.start });
  fetchAPI(`/location?name=${locationName}`)
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

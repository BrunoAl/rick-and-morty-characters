import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';
import { actionTypes } from './getDataReducer';
import serializeResults from './serializeResultFromAPI';

/**
 * Fetches characters by episode
 * @param {string} episodeName - name of the episode
 * @param {func} dispatch - useReducer dispatch function to update the application state
 */
export default function useGetCharactersByEpisode(episodeName, dispatch) {
  if (!episodeName) return;
  dispatch({ type: actionTypes.start });
  fetchAPI(`/episode?name=${episodeName}`)
    .then(data => {
      const characters = data?.results[0]?.characters;
      if (!characters) throw new Error('Empty response');
      const charactersId = getCharactersIdFromUrls(characters);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: actionTypes.success, results: serializeResults(charactersData) });
        })
        .catch(error => dispatch({ type: actionTypes.error, error }));
    })
    .catch(error => dispatch({ type: actionTypes.error, error }));
}

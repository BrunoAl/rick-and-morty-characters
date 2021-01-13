import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';
import { actionTypes } from './getDataReducer';

export default function useGetCharactersByEpisode(episodeName, dispatch) {
  dispatch({ type: actionTypes.start });
  fetchAPI(`/episode?name=${episodeName}`)
    .then(data => {
      if (!data || !data?.results[0]?.characters) throw new Error('Empty response');
      const charactersId = getCharactersIdFromUrls(data?.results[0]?.characters);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: actionTypes.success, results: charactersData });
        })
        .catch(error => dispatch({ type: actionTypes.error, error }));
    })
    .catch(error => dispatch({ type: actionTypes.error, error }));
}

import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrls from './getCharactersIdFromUrls';

export default function useGetCharactersByEpisode(episodeName, dispatch) {
  dispatch({ type: 'start' });
  fetchAPI(`/episode?name=${episodeName}`)
    .then(data => {
      if (!data || !data?.results[0]?.characters) throw new Error('Empty response');
      const charactersId = getCharactersIdFromUrls(data?.results[0]?.characters);

      fetchAPI(`/character/${charactersId.join(',')}`)
        .then(charactersData => {
          if (!charactersData) throw new Error('Failed to fetch characters');
          dispatch({ type: 'success', results: charactersData });
        })
        .catch(error => dispatch({ type: 'error', error }));
    })
    .catch(error => dispatch({ type: 'error', error }));
}

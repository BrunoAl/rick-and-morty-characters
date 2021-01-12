import React from 'react';
import getDataReducer from '../utils/getDataReducer';
import fetchAPI from '../utils/fetchAPI';
import getCharactersIdFromUrl from '../utils/getCharactersIdFromUrl';

export default function useGetCharactersDimension(dimensionName) {
  const [state, dispatch] = React.useReducer(getDataReducer, {
    status: 'pending',
    data: null,
    error: null,
  });

  React.useEffect(() => {
    dispatch({ type: 'start' });
    fetchAPI(`/location?dimension=${dimensionName}`)
      .then(data => {
        if (!data || !data?.results[0]?.residents) throw new Error('Empty resonse');
        const charactersId = getCharactersIdFromUrl(data?.results[0]?.residents);

        fetchAPI(`/character/${charactersId.join(',')}`)
          .then(charactersData => {
            if (!charactersData) throw new Error('Failed to fetch characters');
            dispatch({ type: 'success', results: charactersData });
          })
          .catch(error => dispatch({ type: 'error', error }));
      })
      .catch(error => dispatch({ type: 'error', error }));
  }, []);

  return state;
}

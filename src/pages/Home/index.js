import React from 'react';
import Header from '../../components/Header';
import CharactersList from '../../components/CharactersList';
import CharactersSearchForm from '../../components/CharactersSearchForm';
import getDataReducer, { statusTypes, actionTypes } from '../../utils/getDataReducer';
import { getCharactersByDimension, getCharactersByEpisode, getCharactersByLocation } from '../../utils/getCharacters';
import styles from './styles';
import 'styled-components/macro';

export default function Home() {
  const [locationField, setLocationField] = React.useState('');
  const [dimensionField, setDimensionField] = React.useState('');
  const [episodeField, setEpisodeField] = React.useState('');
  const [charactersListTitle, setCharactersListTitle] = React.useState('');

  const [searchState, dispatchSearch] = React.useReducer(getDataReducer, {
    status: statusTypes.idle,
    data: null,
    error: null,
  });

  function resetSearchState() {
    dispatchSearch({ type: actionTypes.initialState });
  }

  function onSubmitLocation(location) {
    resetSearchState();
    getCharactersByLocation(location, dispatchSearch);
    setCharactersListTitle(`Characters seen at ${location}`);
  }
  function onSubmitDimension(dimension) {
    resetSearchState();
    getCharactersByDimension(dimension, dispatchSearch);
    setCharactersListTitle(`Characters seen in ${dimension}`);
  }
  function onSubmitEpisode(episode) {
    resetSearchState();
    getCharactersByEpisode(episode, dispatchSearch);
    setCharactersListTitle(`Characters seen in the ${episode} episode`);
  }

  function renderSearchForms() {
    return (
      <div className="search-forms">
        <CharactersSearchForm
          label="Search by dimension "
          inputExample="(e.g. Dimension C-137, Post-Apocalyptic Dimension, Replacement Dimension)"
          onChange={setDimensionField}
          value={dimensionField}
          onSubmit={onSubmitDimension}
        />
        <CharactersSearchForm
          label="Search by episode"
          inputExample="(e.g. Get Schwifty, Pilot, Lawnmower Dog, Anatomy Park)"
          onChange={setEpisodeField}
          value={episodeField}
          onSubmit={onSubmitEpisode}
        />
        <CharactersSearchForm
          label="Search by location"
          inputExample="(e.g. Citadel of Ricks, Worldender's lair, Interdimensional Cable)"
          onChange={setLocationField}
          value={locationField}
          onSubmit={onSubmitLocation}
        />
      </div>
    );
  }

  return (
    <div css={styles}>
      <Header>Schwifty Searcher</Header>
      {renderSearchForms()}
      <CharactersList characters={searchState.data} title={charactersListTitle} status={searchState.status} />
    </div>
  );
}

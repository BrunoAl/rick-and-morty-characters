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
  const [charactersListTitle, setcharactersListTitle] = React.useState('');

  const [searchState, dispatchSearch] = React.useReducer(getDataReducer, {
    status: statusTypes.idle,
    data: null,
    error: null,
  });

  function resetSearchState() {
    dispatchSearch({ type: actionTypes.initialState });
  }

  function onSubmitLocation(e) {
    e.preventDefault();
    resetSearchState();
    getCharactersByLocation(locationField, dispatchSearch);
    setcharactersListTitle(`Characters seen at ${locationField}`);
  }
  function onSubmitDimension(e) {
    e.preventDefault();
    resetSearchState();
    getCharactersByDimension(dimensionField, dispatchSearch);
    setcharactersListTitle(`Characters seen in ${dimensionField}`);
  }
  function onSubmitEpisode(e) {
    e.preventDefault();
    resetSearchState();
    getCharactersByEpisode(episodeField, dispatchSearch);
    setcharactersListTitle(`Characters seen in the ${episodeField} episode`);
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

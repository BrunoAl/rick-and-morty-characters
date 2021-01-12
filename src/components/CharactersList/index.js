import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';
import styles from './styles';
import 'styled-components/macro';

export default function CharactersList({ characters }) {
  return (
    <div css={styles}>
      {characters.map(character => (
        <CharacterCard {...character} key={character.id} />
      ))}
    </div>
  );
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

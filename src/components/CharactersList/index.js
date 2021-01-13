import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';
import { listStyles, messageStyles } from './styles';
import 'styled-components/macro';

function Message({ children }) {
  return (
    <div css={messageStyles}>
      <h4>{children}</h4>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.node.isRequired,
};

function List({ characters }) {
  return (
    <div css={listStyles}>
      {characters.map(character => (
        <CharacterCard {...character} key={character.id} />
      ))}
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.node.isRequired,
};

export default function CharactersList({ characters, status }) {
  switch (status) {
    case 'idle':
      return <Message>Make a search to see the characters</Message>;
    case 'rejected':
      return (
        <Message>
          Oh no! There was an error fetching the characters. Make sure to use valid terms in the search fields
        </Message>
      );
    case 'pending':
      return <Message>Loading characters</Message>;
    case 'resolved':
      return <List characters={characters} />;
    default:
      throw new Error(`Unhandled status type: ${status}`);
  }
}

CharactersList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
  status: PropTypes.string.isRequired,
};

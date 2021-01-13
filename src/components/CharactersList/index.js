import React from 'react';
import PropTypes from 'prop-types';
import CharacterCard from '../CharacterCard';
import { statusTypes } from '../../utils/getDataReducer';
import { listStyles, messageStyles } from './styles';
import 'styled-components/macro';

/**
 * Renders message regarding the request status
 * @param {string} children - message
 */
function Message({ children }) {
  return (
    <div css={messageStyles}>
      <h2 className="message">{children}</h2>
    </div>
  );
}

Message.propTypes = {
  children: PropTypes.string.isRequired,
};

function List({ characters, title }) {
  return (
    <div css={listStyles}>
      <h2 className="list__title">{title}</h2>
      <div className="list__items">
        {characters.map(character => (
          <CharacterCard {...character} key={character.id} />
        ))}
      </div>
    </div>
  );
}

List.propTypes = {
  characters: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

/**
 * Renders characters list or message (loading, error, etc)
 * @param {array} characters - list of characters
 * @param {string} status - request status
 * @param {string} title - list title
 */
export default function CharactersList({ characters, status, title }) {
  switch (status) {
    case statusTypes.idle:
      return <Message>Make a search to see the characters</Message>;
    case statusTypes.rejected:
      return (
        <Message>
          Oh no! There was an error fetching the characters. Make sure to use a valid terms in the search fields
        </Message>
      );
    case statusTypes.pending:
      return <Message>Loading characters...</Message>;
    case statusTypes.resolved:
      return <List characters={characters} title={title} />;
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
  title: PropTypes.string.isRequired,
  status: PropTypes.oneOf([statusTypes.idle, statusTypes.rejected, statusTypes.pending, statusTypes.resolved])
    .isRequired,
};

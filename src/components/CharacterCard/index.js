import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import 'styled-components/macro';

function Section({ children }) {
  return <div className="card__section">{children}</div>;
}

Section.propTypes = {
  children: PropTypes.node.isRequired,
};

function CharacterCard({ gender, image, name, species, origin, status, location }) {
  return (
    <article css={styles}>
      <div className="card__image">
        <img src={image} alt={name} />
      </div>
      <div className="card__info">
        <h3>{name}</h3>
        <span className="card__status">{`${status} - ${species}`}</span>
        <Section>
          <span className="card__info-section-title">Last known location:</span>
          <span>{location.name}</span>
        </Section>
        <Section>
          <span className="card__info-section-title">Gender:</span>
          <span>{gender}</span>
        </Section>
        <Section>
          <span className="card__info-section-title">Origin:</span>
          <span>{origin.name}</span>
        </Section>
      </div>
    </article>
  );
}

CharacterCard.propTypes = {
  gender: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  origin: PropTypes.shape({
    name: PropTypes.string,
  }),
  status: PropTypes.string,
  location: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default CharacterCard;

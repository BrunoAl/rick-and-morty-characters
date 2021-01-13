import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import 'styled-components/macro';

export default function CharactersSearchForm({ label, buttonText, onSubmit, onChange, value, inputExample }) {
  const id = label.replace(/\s/g, '');
  return (
    <form css={styles} onSubmit={onSubmit}>
      <label htmlFor={id}>{label}</label>
      {inputExample && <p className="form__input-example">{inputExample}</p>}
      <input
        type="text"
        placeholder="Dimension C-137"
        name={id}
        id={id}
        onChange={e => e.preventDefault && onChange(e.target.value)}
        value={value}
        className="form__input"
      />
      <button type="submit" className="form__submit-button">
        {buttonText}
      </button>
    </form>
  );
}

CharactersSearchForm.defaultProps = {
  buttonText: 'Search',
  inputExample: null,
};

CharactersSearchForm.propTypes = {
  label: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  inputExample: PropTypes.string,
};

import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import 'styled-components/macro';

/**
 * Renders character search form
 * @param {string} label - input label
 * @param {string} buttonText - button text
 * @param {func} onSubmit - submit function
 * @param {func} onChange - input field change handler
 * @param {string} value - input value
 * @param {string} inputExample - input example text
 */
export default function CharactersSearchForm({ label, buttonText, onSubmit, onChange, value, inputExample }) {
  const id = label.replace(/\s/g, '');
  return (
    <form css={styles} onSubmit={onSubmit}>
      <label htmlFor={id}>{label}</label>
      {inputExample && <p className="form__input-example">{inputExample}</p>}
      <input
        type="text"
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

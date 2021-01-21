import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharactersSearchForm from './index';

const searchTerm = 'Random input value';

describe('CharactersSearchForm', () => {
  it('should fill the input field and click submit ', () => {
    let inputValue = '';
    const handleSubmit = jest.fn();
    const handleChange = jest.fn(value => {
      inputValue = `${inputValue}${value}`;
    });

    const { rerender } = render(
      <CharactersSearchForm
        label="Search by dimension "
        inputExample="(e.g. Dimension C-137, Post-Apocalyptic Dimension, Replacement Dimension)"
        onChange={handleChange}
        value={inputValue}
        onSubmit={handleSubmit}
      />,
    );

    const input = screen.getByRole('textbox', { name: /search by dimension/i });
    const submitButton = screen.getByRole('button', { name: /search/i });

    expect(input.value).toBe('');
    expect(handleSubmit).toHaveBeenCalledTimes(0);

    userEvent.type(input, searchTerm);

    rerender(
      <CharactersSearchForm
        label="Search by dimension "
        inputExample="(e.g. Dimension C-137, Post-Apocalyptic Dimension, Replacement Dimension)"
        onChange={handleChange}
        value={inputValue}
        onSubmit={handleSubmit}
      />,
    );

    userEvent.click(submitButton);
    expect(input.value).toBe(searchTerm);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
    expect(handleSubmit).toHaveBeenCalledWith(searchTerm);
  });
});

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import CharactersSearchForm from './index';

const searchTerm = 'R';

describe('CharactersSearchForm', () => {
  it('Should fill the input field and click submit ', () => {
    let inputValue = '';
    const handleSubmit = jest.fn();
    const handleChange = jest.fn(value => {
      inputValue = value;
    });

    render(
      <CharactersSearchForm
        label="Search by dimension "
        inputExample="(e.g. Dimension C-137, Post-Apocalyptic Dimension, Replacement Dimension)"
        onChange={handleChange}
        value={inputValue}
        onSubmit={handleSubmit}
      />,
    );

    userEvent.type(screen.getByRole('textbox', { name: /search by dimension/i }), searchTerm);
    userEvent.click(screen.getByRole('button', { name: /search/i }));

    expect(handleChange).toHaveBeenCalledWith(searchTerm);
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });
});

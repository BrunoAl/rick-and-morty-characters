import React from 'react';
import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { charactersData } from '../../utils/APIMockData';
import userEvent from '@testing-library/user-event';
import handlers from '../../utils/serverHandlers';
import Home from './index';

const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});
afterAll(() => {
  server.close();
});

describe('CharactersSearchForm', () => {
  it('should search by dimension and render mocked data', async () => {
    const dimensionName = 'Dimension C-137';
    render(<Home />);
    const input = screen.getByRole('textbox', { name: /search by dimension/i });
    const [submitButton] = screen.getAllByRole('button', { name: /search/i });

    userEvent.type(input, dimensionName);
    userEvent.click(submitButton);

    await waitForElementToBeRemoved(() => screen.getByText(/Loading characters.../i));

    expect(screen.getByText(`Characters seen in ${dimensionName}`)).toBeInTheDocument();
    expect(screen.getByText(charactersData[0].name)).toBeInTheDocument();
    expect(screen.getByText(charactersData[1].name)).toBeInTheDocument();
  });
});

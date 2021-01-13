import getCharactersIdFromUrls from './getCharactersIdFromUrls';

const charactersUrls = [
  'https://rickandmortyapi.com/api/character/1',
  'https://rickandmortyapi.com/api/character/2',
  'https://rickandmortyapi.com/api/character/35',
  'https://rickandmortyapi.com/api/character/38',
  'https://rickandmortyapi.com/api/character/62',
  'https://rickandmortyapi.com/api/character/92',
];

const charactersId = ['1', '2', '35', '38', '62', '92'];

describe('getCharactersIdFromUrls', () => {
  it('should return a list of ids', () => {
    expect(getCharactersIdFromUrls(charactersUrls)).toEqual(charactersId);
  });
});

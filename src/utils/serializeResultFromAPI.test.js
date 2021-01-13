import serializeResults from './serializeResultFromAPI';

const results = ['foo', 'bar'];
const result = 'foo';

describe('serializeResults', () => {
  it('should always return an array with the items', () => {
    expect(serializeResults(results)).toStrictEqual(['foo', 'bar']);
    expect(serializeResults(result)).toStrictEqual(['foo']);
  });
});

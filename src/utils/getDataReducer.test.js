import getDataReducer, { actionTypes, statusTypes } from './getDataReducer';

const initialState = {
  status: statusTypes.initialState,
  data: [],
  error: null,
};

const results = ['rick', 'morty'];
const errorMessage = 'something went wrong';

describe('getDataReducer', () => {
  it('should return correct state', () => {
    expect(getDataReducer(initialState, { type: actionTypes.initialState })).toEqual({
      ...initialState,
      status: statusTypes.idle,
    });

    expect(getDataReducer(initialState, { type: actionTypes.start })).toEqual({
      ...initialState,
      status: statusTypes.pending,
    });

    expect(getDataReducer(initialState, { type: actionTypes.success, results })).toEqual({
      ...initialState,
      status: statusTypes.resolved,
      data: results,
    });

    expect(getDataReducer(initialState, { type: actionTypes.error, error: errorMessage })).toEqual({
      ...initialState,
      status: statusTypes.rejected,
      error: errorMessage,
    });
  });
});

export const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  start: 'START',
  initialState: 'INITIAL_STATE',
};

export const statusTypes = {
  rejected: 'REJECTED',
  resolved: 'RESOLVED',
  pending: 'PENDING',
  idle: 'IDLE',
};

/**
 * Reducer function to manage application state
 * @param {object} state - initial state
 * @param {object} action
 * @return {object} - updated state
 */
export default function getDataReducer(state, action) {
  switch (action.type) {
    case actionTypes.error: {
      return {
        ...state,
        status: statusTypes.rejected,
        error: action.error,
      };
    }
    case actionTypes.success: {
      return {
        ...state,
        status: statusTypes.resolved,
        data: action.results,
      };
    }
    case actionTypes.start: {
      return {
        ...state,
        status: statusTypes.pending,
      };
    }
    case actionTypes.initialState: {
      return {
        ...state,
        status: statusTypes.idle,
        data: null,
        error: null,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

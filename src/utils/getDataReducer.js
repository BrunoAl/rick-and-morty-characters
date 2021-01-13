export const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  start: 'START',
};

export default function getDataReducer(state, action) {
  switch (action.type) {
    case actionTypes.error: {
      return {
        ...state,
        status: 'rejected',
        error: action.error,
      };
    }
    case actionTypes.success: {
      return {
        ...state,
        status: 'resolved',
        data: action.results,
      };
    }
    case actionTypes.start: {
      return {
        ...state,
        status: 'pending',
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

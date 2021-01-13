export const actionTypes = {
  error: 'ERROR',
  success: 'SUCCESS',
  start: 'START',
};

export const statusTypes = {
  rejected: 'REJECTED',
  resolved: 'RESOLVED',
  pending: 'PENDING',
  idle: 'IDLE',
};

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
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

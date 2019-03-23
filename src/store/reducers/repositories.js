const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};

export default function login(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOAD_REPOSITORIES_REQUEST':
      return { ...state, loading: true };

    case 'LOAD_REPOSITORIES_SUCCESS':
      return {
        ...state,
        data: action.payload.data,
        loading: false,
        error: false,
      };

    case 'LOAD_REPOSITORIES_FAILURE':
      return { ...state, error: true, loading: false };

    default:
      return state;
  }
}

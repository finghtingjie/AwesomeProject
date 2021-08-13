const app = {};
function reducer(state = app, action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
}

export default reducer;

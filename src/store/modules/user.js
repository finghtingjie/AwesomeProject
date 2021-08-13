import AsyncStorage from '@react-native-community/async-storage';

const user = {
  user: null,
};

export function setUser(user) {
  return function(dispatch) {
    return AsyncStorage.setItem('user', JSON.stringify(user)).then(res => {
      return dispatch({
        type: 'SET_USER',
        user,
      });
    });
  };
}

function reducer(state = user, action) {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'CLEARN_USER':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}

export default reducer;

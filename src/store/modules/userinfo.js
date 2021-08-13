// const userinfo = {};
let userinfo = {};

export function setUserInfo(userinfo) {
  return {
    type: 'SET_USER_INFO',
    userinfo,
  };
}

function reducer(state = userinfo, action) {
  switch (action.type) {
    case 'SET_USER_INFO':
      return {
        ...state,
        userinfo: action.userinfo,
      };
    default:
      return state;
  }
}

export default reducer;

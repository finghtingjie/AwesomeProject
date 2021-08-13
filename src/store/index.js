import { combineReducers } from 'redux';

import app from './modules/app';
import user from './modules/user';
import userinfo from './modules/userinfo';

const store = combineReducers({
  app,
  user,
  userinfo,
});

export default store;

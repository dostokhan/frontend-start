import { combineReducers } from 'redux';

import auth from './modules/auth';
import user from './modules/user';
import khobor from './modules/khobor';

export default combineReducers({
  auth,
  user,
  khobor,
});


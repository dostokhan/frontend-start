import { combineReducers } from 'redux';

import auth from './modules/auth';
import khobor from './modules/khobor';

export default combineReducers({
  auth,
  khobor,
});


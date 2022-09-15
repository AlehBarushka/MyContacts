import { combineReducers } from 'redux';

import appReducer from './application';
import authReducer from './auth';
import contactsReducer from './contacts';

const rootReducer = combineReducers({
  auth: authReducer,
  app: appReducer,
  contacts: contactsReducer,
});

export default rootReducer;

import { combineReducers } from 'redux';

import appReducer from './application';
import authReducer from './auth';

const rootReducer = combineReducers({ auth: authReducer, app: appReducer });

export default rootReducer;

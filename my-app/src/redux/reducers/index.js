import { combineReducers } from 'redux';
import jobReducer from './jobReducers';

const rootReducer = combineReducers({
  jobs: jobReducer,
  // Add other reducers as needed
});

export default rootReducer;

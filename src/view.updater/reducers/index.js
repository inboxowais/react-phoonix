import {combineReducers} from 'redux-immutable';
import appReducer from './app.reducer';
import RajyogaReducer from './raj.yoga.medications.reducers';
import  authReducer  from './auth.reducer';
import postsReducer from './posts.reducer';
export default function createReducer() {
  return combineReducers({
    appReducer,
    RajyogaReducer,
    authReducer,
    postsReducer
  });
}

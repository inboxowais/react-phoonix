import {combineReducers} from 'redux-immutable';
import appReducer from './app.reducer';
import RajyogaReducer from './raj.yoga.medications.reducers';
import  authReducer  from './auth.reducer';
import postsReducer from './posts.reducer';
import appletsReducer from './applets.reducers';
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();
export default function createReducer() {
  return combineReducers({
    appReducer,
    RajyogaReducer,
    authReducer,
    postsReducer,
    appletsReducer,
    router: connectRouter(history),
  });
}

import {call, put, takeEvery} from 'redux-saga/effects';
import request from './request';
import allAfterMiddleware from './all.after.middleware';
import {addUpdateAppLoadersStatus} from './../../view.updater/actions/app.actions';

export function* getServerData(action) {
  
  if (action && action.type.indexOf('SUCCESS') > -1) {
    yield allAfterMiddleware(action);
  }
  if (action.url) {
    
    try {
      let response;
      
      // Call our request helper (see 'utils/request')
      if (action.method === 'POST' || action.method === 'PUT') {
        let data = {};
        if (action.encoded === 'URL_ENCODED') {
          // data = new URLSearchParams(action.data);
          let formBody = [];
          Object.keys(action.data).map((key) => {
            const encodedKey = encodeURIComponent(key);
            const encodedValue = encodeURIComponent(action.data[key]);
            formBody.push(encodedKey + '=' + encodedValue);
          });
          formBody = formBody.join('&');
          data = formBody;
        } else {
          data = new FormData();
          for (var item in action.data) {
            data.append(item, action.data[item]);
          }
        }
        response = yield call(request, action.url, {
          method: action.method || 'GET',
          body: action.data,
          encoded: action.encoded,
        });
      } else {
        response = yield call(request, action.url, {
          method: action.method || 'GET',
          encoded: action.encoded,
          token: action.token,
        });
      }
      if (
        
        response && response.error &&
        (response.error.code == 812 ||
          response.error.code == 400 ||
          response.error.code == 900 ||
          response.error.code == 801 ||
          response.error.code == 802 ||
          response.error.code == 804 ||
          response.error.code == 800 ||
          response.error.code == 816 ||
          response.error.code == 803 ||
          response.error.code == 401 ||
          response.error.code == 806 ||
          response.error.code == 807 ||
          response.error.message === 'Wrong Credentials' ||
          response.error.code == 811)
      ) {
        
        yield put({
          type: `${action.type}_ERROR`,
          error: response.error,
        });
      } else if (response) {
        yield put({
          type: `${action.type}_SUCCESS`,
          baseType: `${action.type}`,
          response : response,
          data: action.data,
        });
      }
    } catch (err) {
      yield put(
        addUpdateAppLoadersStatus(
          action.type,
          'ERROR',
          `${action.type}_ERROR_ID`,
        ),
      );
    }
  }
}

export default function* getDataFromServer() {
  yield takeEvery('*', getServerData);
}

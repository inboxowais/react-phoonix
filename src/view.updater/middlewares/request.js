import 'whatwg-fetch';
import { SIGN_UP_URL, SERVER_PORT, AUTH_URL, SER, SERVER_URL } from './../../utils/server/utils';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export default function request(url, options) {



  url = options.auth ? `${AUTH_URL}/${url}` : options.sign ? `${SIGN_UP_URL}/${url}` : `${SERVER_URL}/${url}`;

  const token = JSON.parse(window.localStorage.getItem("token"))

  var obj = {
    method: options.method,
    headers: token ? {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate',
      'Authorization': 'Bearer ' + token.idToken
    } : {
      'Content-Type': 'application/json',
      'Accept-Encoding': 'gzip,deflate',
    },
    body: JSON.stringify(options.body),
  };
  
  return fetch(url, obj)
    .then(function (res) {
    
      return res.text();
    })
    .then((text) => text.length ? JSON.parse(text) : { success: true })
    .catch((err) => {
      console.log(err);
    });
}

// const resAxios = axios({
//   ...options,
//   validateStatus: function (status) {
//     return status >= 200 && status <= 700;
//   }
// }).then(checkStatus)
//   .then(parseJSON)
//   .then((response) => {
//     return response;
//   })
//   .catch(error => {
//     if (error && error.__CANCEL__ === true) {
//       return {
//         code: 1,
//         message: "Request Cancelled"
//       }
//     }
//     else {
//       return {
//         code: 0,
//         message: "Connection Failed"
//       }
//     }
//   });
// return resAxios;
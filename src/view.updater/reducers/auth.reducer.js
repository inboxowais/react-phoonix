import Immutable from 'immutable';
import { LOGIN, LOGIN_SUCCESS, LOGIN_ERROR, RESET_AUTH, SIGN_UP, SIGN_UP_ERROR, SIGN_UP_SUCCESS, FORGET_PASSWORD, FORGET_PASSWORD_ERROR, FORGET_PASSWORD_SUCCESS } from './../actions/auth.actions'

const initialState = Immutable.fromJS({
    authResponse: window.localStorage.getItem("token"),
    authResponseLoading: false,
    authResponseError: false,
    signUpError: false,
    signUpLoading: false,
    signUpResponse: false,
    forgetPasswordLoading: false,
    forgetPasswordResponse: false,
    forgetPasswordError: false

});

function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return state
                .set('authResponseLoading', true)
                .set('authResponseError', false)
                .set("usersIsLoading", true)
        case LOGIN_SUCCESS:
            window.localStorage.setItem("token", action.response.idToken)
            return state
                .set('authResponseLoading', false)
                .set('authResponseError', true)
                .set("authResponse", action.response.idToken)
        case LOGIN_ERROR:
            return state
                .set('authResponseLoading', false)
                .set('authResponseError', action.error)
        case RESET_AUTH:
            return state
                .set('authResponseLoading', false)
                .set('authResponseError', false)
                .set('authResponse', false)
                .set('signUpResponse', false)
                .set('signUpLoading', false)
                .set('signUpError', false)
                .set('forgetPasswordLoading', false)
                .set('forgetPasswordResponse', false)
                .set('forgetPasswordError', false)
        case SIGN_UP:
            return state
                .set('signUpLoading', true)
                .set('signUpError', false)
        case SIGN_UP_SUCCESS:
            window.localStorage.setItem("token", action.response.idToken)
            return state
                .set('signUpLoading', false)
                .set('signUpError', true)
                .set("signUpResponse", action.response.idToken)
        case SIGN_UP_ERROR:
            return state
                .set('signUpLoading', false)
                .set('signUpError', action.error)
        case FORGET_PASSWORD:
            return state
                .set('forgetPasswordLoading', true)
                .set('forgetPasswordError', false)
        case FORGET_PASSWORD_SUCCESS:
            return state
                .set('forgetPasswordLoading', false)
                .set('forgetPasswordError', false)
                .set("forgetPasswordResponse", action.response)
        case FORGET_PASSWORD_ERROR:
            debugger
            return state
                .set('forgetPasswordLoading', false)
                .set('forgetPasswordError', action.error)
        default:
            return state;
    }
}

export default authReducer
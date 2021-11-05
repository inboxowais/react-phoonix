import { createSelector } from 'reselect';

const selectAuth = (state) => state.get('authReducer');


const makeSelectAuth = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get("authResponse")
)
const makeSelectAuthLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get("authResponseLoading")
)
const makeSelectAuthError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get("authResponseError")
)

const makeSelectSignUpLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('signUpLoading')
)

const makeSelectSignUpResponse = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('signUpResponse')
)

const makeSelectSignUpError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('signUpError')
)

export {
    makeSelectAuth,
    makeSelectAuthLoading,
    makeSelectAuthError,
    makeSelectSignUpLoading,
    makeSelectSignUpResponse,
    makeSelectSignUpError
}


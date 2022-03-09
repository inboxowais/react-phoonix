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

const makeSelectForgetPasswordLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('forgetPasswordLoading')
)

const makeSelectForgetPasswordResponse = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('forgetPasswordResponse')
)

const makeSelectForgetPasswordError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('forgetPasswordError')
)

const makeSelectProfileLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('profileLoading')
)

const makeSelectProfile = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('profile')
)

const makeSelectProfileError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('profileError')
)


const makeSelectUpdateProfile = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('updateProfile')
)

const makeSelectUpdateProfileLoading = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('updateProfileLoading')
)

const makeSelectUpdateProfileError = () => createSelector(
    selectAuth,
    (selectAuth) => selectAuth.get('updateProfileError')
)




export {
    makeSelectAuth,
    makeSelectAuthLoading,
    makeSelectAuthError,
    makeSelectSignUpLoading,
    makeSelectSignUpResponse,
    makeSelectSignUpError,
    makeSelectForgetPasswordError,
    makeSelectForgetPasswordLoading,
    makeSelectForgetPasswordResponse,
    makeSelectProfile,
    makeSelectProfileLoading,
    makeSelectProfileError,
    makeSelectUpdateProfile,
    makeSelectUpdateProfileLoading,
    makeSelectUpdateProfileError
}


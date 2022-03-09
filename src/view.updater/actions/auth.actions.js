export const LOGIN = "LOGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";
export const RESET_AUTH = "RESET_AUTH"
export const SIGN_UP = "SIGN_UP"
export const SIGN_UP_ERROR = "SIGN_UP_ERROR"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const FORGET_PASSWORD = "FORGET_PASSWORD"
export const FORGET_PASSWORD_ERROR = "FORGET_PASSWORD_ERROR"
export const FORGET_PASSWORD_SUCCESS = "FORGET_PASSWORD_SUCCESS"
export const GET_PROFILE = "GET_PROFILE"
export const GET_PROFILE_ERROR = "GET_PROFILE_ERROR"
export const GET_PROFILE_SUCCESS = "GET_PROFILE_SUCCESS"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR"



export function login(data) {
    return {
        type: LOGIN,
        url: `relyingparty/verifyPassword?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM`,
        data: {
            "email": data.email,
            "password": data.password,
            "returnSecureToken": true
        },
        method: "POST",
        auth: true

    }
}

export function signUp(data) {
    return {
        type: SIGN_UP,
        url: `accounts:signUp?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM`,
        method: "POST",
        data,
        sign: true
    }
}

export function forgetPassword(data) {
    return {
        type: FORGET_PASSWORD,
        url: `accounts:sendOobCode?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM&requestType=PASSWORD_RESET&email=${data.email}`,
        method: "POST",
        data,
        sign: true
    }
}

export function getProfile(userId) {
    return {
        type: GET_PROFILE,
        url: `user/my_profile/${userId}`
    }
}

export function updateProfile(data) {
    return {
        type: UPDATE_PROFILE,
        method: "PUT",
        url: `user/my_profile/${data.userId}`,
        data: {
            email: data.email ? data.email : undefined,
            password: data.password ? data.password : undefined,
            displayName : data.displayName ? data.displayName : undefined,
            photoURL : data.photoURL ? data.photoURL : undefined
        }
    }
}

export function resetAuth() {
    return {
        type: RESET_AUTH,
    }
}


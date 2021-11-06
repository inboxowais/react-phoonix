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



export function login(data) {
    return {
        type: LOGIN,
        url: `accounts:signInWithPassword?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM&email=${data.email}&password=${data.password}`,
        method: "POST",

    }
}

export function signUp(data) {
    return {
        type: SIGN_UP,
        url: `accounts:signUp?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM`,
        method: "POST",
        data
    }
}

export function forgetPassword(data) {
    return {
        type: FORGET_PASSWORD,
        url: `accounts:sendOobCode?key=AIzaSyC2SolyxOa49JIwU6atjdyheX1zMkU2lqM&requestType=PASSWORD_RESET&email=${data.email}`,
        method: "POST",
        data
    }
}

export function resetAuth() {
    return {
        type: RESET_AUTH,
    }
}


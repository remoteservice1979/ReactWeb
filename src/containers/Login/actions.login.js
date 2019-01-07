import {
    FETCH_LOGGED_IN_USER, FETCH_LOGGED_IN_USER_ERROR, FETCH_LOGGED_IN_USER_SUCCESS, LOGIN_ERROR, LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from "./contants.login";

export const login = (username, password) => ({
    type: LOGIN_REQUEST,
    payload: {username, password}
});

export const loginSuccess = token => ({
    type: LOGIN_SUCCESS,
    payload: {token}
});

export const loginError = error => ({
    type: LOGIN_ERROR,
    payload: {error}
});

export const logout = () => ({
    type: LOGOUT
});

export const fetchLoggedInUser = () => ({
    type: FETCH_LOGGED_IN_USER
});

export const fetchLoggedInUserSuccess = user => ({
    type: FETCH_LOGGED_IN_USER_SUCCESS,
    payload: {user}
});

export const fetchLoggedInUserError = error => ({
    type: FETCH_LOGGED_IN_USER_ERROR,
    payload: {error}
});

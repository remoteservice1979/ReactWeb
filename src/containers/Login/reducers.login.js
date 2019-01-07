import {
    FETCH_LOGGED_IN_USER_ERROR,
    FETCH_LOGGED_IN_USER_SUCCESS,
    LOGIN_ERROR,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT
} from "./contants.login";

let userToken = JSON.parse(localStorage.getItem('userToken')) || '';
const initialState = {
    loggedIn: userToken !== '',
    userToken: userToken,
    user: {
        firstName: "",
        lastName: ""
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
            localStorage.setItem('userToken', JSON.stringify(action.payload.token));
            return {
                ...state,
                loggingIn: false,
                loggedIn: true,
                userToken: action.payload.token
            };
        case LOGIN_ERROR:
            return {};
        case LOGOUT:
            localStorage.removeItem('userToken');
            return {
                ...initialState,
                loggedIn: false,
                userToken: ''
            };
        case FETCH_LOGGED_IN_USER_SUCCESS:
            return {
                ...state,
                user: action.payload.user
            };
        case FETCH_LOGGED_IN_USER_ERROR:
            return {
                ...state
            };
        default:
            return state
    }
};

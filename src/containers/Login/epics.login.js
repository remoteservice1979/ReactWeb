import {combineEpics} from 'redux-observable';
import {FETCH_LOGGED_IN_USER, LOGIN_REQUEST} from "./contants.login";
import {
    fetchLoggedInUser,
    fetchLoggedInUserError,
    fetchLoggedInUserSuccess,
    loginError,
    loginSuccess
} from "./actions.login";

export const login = (actions$, store, {getJSON, of}) =>
    actions$
        .ofType(LOGIN_REQUEST)
        .mergeMap(action => {
            const authHeader = 'Basic ' + btoa(action.payload.username + ':' + action.payload.password);
            const appToken = process.env.REACT_APP_APP_TOKEN;
            const headers = {
                'X-Nspire-AppToken': appToken,
                'Authorization': authHeader
            };
            // http://www.mocky.io/v2/5c2f69423200000e0059080d
            return getJSON('http://www.mocky.io/v2/5c2f69423200000e0059080d', headers)
                .mergeMap((user) => [loginSuccess(user.token), fetchLoggedInUser()])
                .catch(error => of(loginError(error)))
        });

export const getLoggedInUser = (actions$, store, {getJSON, of}) =>
    actions$
        .ofType(FETCH_LOGGED_IN_USER)
        .mergeMap(action => {
            const appToken = process.env.REACT_APP_APP_TOKEN;
            const headers = {
                'X-Nspire-AppToken': appToken,
                'X-Nspire-UserToken': store.getState().userSession.userToken
            };
           // http://www.mocky.io/v2/5c2f69a33200005100590810
            return getJSON('http://www.mocky.io/v2/5c2f69a33200005100590810', headers)
                .map(user => fetchLoggedInUserSuccess(user))
                .catch(error => of(fetchLoggedInUserError(error)))
        });

export default combineEpics(
    login,
    getLoggedInUser
);


// git remote set-url origin https://github.com/anilkumarjoshi1979/reactappdemo
// git remote add origin git@github.com://AnilJoshi23:Raja_1979@github.com:AnilJoshi23/reactapp.git

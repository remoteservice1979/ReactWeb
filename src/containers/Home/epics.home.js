import {combineEpics} from 'redux-observable';
import {FETCH_ASSETS} from "./constants.home";
import {fetchAssetsError, fetchAssetsSuccess} from "./actions.home";

export const getAssets = (actions$, store, {getJSON, of}) =>
    actions$
        .ofType(FETCH_ASSETS)
        .mergeMap(action => {
            const headers = {
                'X-Nspire-UserToken': store.getState().userSession.userToken
            };

            return getJSON('http://services.stage.spireon.com/v0/rest/assets', headers)
                .map(result => fetchAssetsSuccess(result.content, result.total))
                .takeUntil(actions$.ofType(FETCH_ASSETS))
                .retry(2)
                .catch(error => of(fetchAssetsError(error)))
        });

export default combineEpics(
    getAssets
);

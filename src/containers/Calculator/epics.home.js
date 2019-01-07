/* @flow */
import { combineEpics } from 'redux-observable';
import { FETCH_ASSETS, FETCH_LANDMARKS, FETCH_LANDMARKGROUPS, FETCH_SCORECARDS } from './constants.home';
import {
    fetchAssetsError,
    fetchAssetsSuccess,
    fetchLandmarksError,
    fetchLandmarksSuccess,
    fetchScoreCardsError,
    fetchScoreCardsSuccess,
    fetchLandmarkGroupsError,
    fetchLandmarkGroupsSuccess,
} from './actions.home';


type ObservarblesTypes = {
    getJSON: Function,
    of: Function
}


export const getLandmarks =
    (actions$: Function, store: Object, { getJSON, of }: ObservarblesTypes) =>
        actions$
            .ofType(FETCH_SCORECARDS)
            .mergeMap(() => {
                const headers = {
                    'X-Nspire-UserToken': store.getState().userSession.userToken,
                };
                return true;
                // return getJSON(`${config.get('PLATFORM_API_BASE_URL')}/landmarks`, headers)
                //     .map(result => fetchScoreCardsSuccess(result.content, result.total))
                //     .takeUntil(actions$.ofType(FETCH_SCORECARDS))
                //     .retry(2)
                //     .catch(error => of(fetchScoreCardsError(error)));
            });

export default combineEpics(getLandmarks);

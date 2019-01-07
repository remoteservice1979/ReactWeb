/* @flow */

export const FETCH_ASSETS: string = 'FETCH_ASSETS';
export const FETCH_ASSETS_SUCCESS: string = 'FETCH_ASSETS_SUCCESS';
export const FETCH_ASSETS_ERROR: string = 'FETCH_ASSETS_ERROR';
export const FETCH_LANDMARKS: string = 'FETCH_LANDMARKS';
export const FETCH_LANDMARKS_SUCCESS: string = 'FETCH_LANDMARKS_SUCCESS';
export const FETCH_LANDMARKS_ERROR: string = 'FETCH_LANDMARKS_ERROR';
export const FETCH_SCORECARDS: string = 'FETCH_SCORECARDS';
export const FETCH_SCORECARDS_SUCCESS: string = 'FETCH_SCORECARDS_SUCCESS';
export const FETCH_SCORECARDS_ERROR: string = 'FETCH_SCORECARDS_ERROR';
export const FETCH_LANDMARKGROUPS: string = 'FETCH_LANDMARKGROUPS';
export const FETCH_LANDMARKGROUPS_SUCCESS: string = 'FETCH_LANDMARKGROUPS_SUCCESS';
export const FETCH_LANDMARKGROUPS_ERROR: string = 'FETCH_LANDMARKGROUPS_ERROR';
export type HomeTypeAction = {
    type: string;
    payload?: Object;
}

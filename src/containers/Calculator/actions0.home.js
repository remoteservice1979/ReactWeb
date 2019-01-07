/* @flow */

import {
    FETCH_ASSETS,
    FETCH_ASSETS_ERROR,
    FETCH_ASSETS_SUCCESS,
    FETCH_LANDMARKS,
    FETCH_LANDMARKS_ERROR,
    FETCH_LANDMARKS_SUCCESS,
    FETCH_SCORECARDS,
    FETCH_SCORECARDS_ERROR,
    FETCH_SCORECARDS_SUCCESS,
    FETCH_LANDMARKGROUPS,
    FETCH_LANDMARKGROUPS_ERROR,
    FETCH_LANDMARKGROUPS_SUCCESS,
} from './constants.home';
import type { HomeTypeAction } from './constants.home';

export const fetchAssets = (): HomeTypeAction => ({
    type: FETCH_ASSETS,
});

export const fetchAssetsSuccess = (assets: string, totalAssets : number): HomeTypeAction => ({
    type: FETCH_ASSETS_SUCCESS,
    payload: { assets, totalAssets },
});

export const fetchAssetsError = (error: string): HomeTypeAction => ({
    type: FETCH_ASSETS_ERROR,
    payload: { error },
});

export const fetchLandmarks = (): HomeTypeAction => ({
    type: FETCH_LANDMARKS,
});

export const fetchLandmarksSuccess =
    (landmarks: string, totalLandmarks : number): HomeTypeAction => ({
        type: FETCH_LANDMARKS_SUCCESS,
        payload: { landmarks, totalLandmarks },
    });

export const fetchLandmarksError = (error: string): HomeTypeAction => ({
    type: FETCH_LANDMARKS_ERROR,
    payload: { error },
});

export const fetchScoreCards = (): HomeTypeAction => ({
    type: FETCH_SCORECARDS,
});

export const fetchScoreCardsSuccess =
    (landmarks: string, totalLandmarks : number): HomeTypeAction => ({
        type: FETCH_SCORECARDS_SUCCESS,
        payload: { landmarks, totalLandmarks },
    });

export const fetchScoreCardsError = (error: string): HomeTypeAction => ({
    type: FETCH_SCORECARDS_ERROR,
    payload: { error },
});

export const fetchLandmarkGroups = (): HomeTypeAction => ({
    type: FETCH_LANDMARKGROUPS,
});

export const fetchLandmarkGroupsSuccess =
    (landmarkGroups: string, totalLandmarkGroups : number): HomeTypeAction => ({
        type: FETCH_LANDMARKGROUPS_SUCCESS,
        payload: { landmarkGroups, totalLandmarkGroups },
    });

export const fetchLandmarkGroupsError = (error: string): HomeTypeAction => ({
    type: FETCH_LANDMARKGROUPS_ERROR,
    payload: { error },
});

import {FETCH_ASSETS, FETCH_ASSETS_ERROR, FETCH_ASSETS_SUCCESS} from './constants.home';

export const fetchAssets = () => ({
    type: FETCH_ASSETS
});

export const fetchAssetsSuccess = (assets, totalAssets) => ({
    type: FETCH_ASSETS_SUCCESS,
    payload: {assets, totalAssets}
});

export const fetchAssetsError = error => ({
    type: FETCH_ASSETS_ERROR,
    payload: {error}
});

/* @flow */
import { FETCH_ASSETS_ERROR, FETCH_ASSETS_SUCCESS } from './constants.home';

const initialState = {
    assets: [],
};

type stateType = {
    assets: Array<Object>,
}
type actionType = {
    type: string,
    payload :{
        assets:{},
        totalAssets: number
    }
}

export default (state:stateType = initialState, action:actionType) => {
    switch (action.type) {
    case FETCH_ASSETS_SUCCESS:
        return {
            ...state,
            assets: action.payload.assets,
            totalAssets: action.payload.totalAssets,
        };
    case FETCH_ASSETS_ERROR:
        return state;
    default:
        return state;
    }
};

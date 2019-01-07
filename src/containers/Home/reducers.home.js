import {FETCH_ASSETS_ERROR, FETCH_ASSETS_SUCCESS} from "./constants.home";

const initialState = {
    assets: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ASSETS_SUCCESS:
            return {
                ...state,
                assets: action.payload.assets,
                totalAssets: action.payload.totalAssets
            };
        case FETCH_ASSETS_ERROR:
            return state;
        default:
            return state;
    }
};

// add reducers from all containers here
import home from '../containers/Home/reducers.home';
import userSession from '../containers/Login/reducers.login';
import {combineReducers} from 'redux';

export default combineReducers({
    userSession,
    home
});

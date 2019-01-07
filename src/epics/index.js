// add epics from all containers here
import {combineEpics} from 'redux-observable/lib/cjs/combineEpics';
import home from '../containers/Home/epics.home';
import login from '../containers/Login/epics.login';

export default combineEpics(
    home,
    login
);

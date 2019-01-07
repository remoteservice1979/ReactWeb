import {applyMiddleware, createStore} from 'redux';
import {createEpicMiddleware} from 'redux-observable';
// rxJs observables
import {ajax} from 'rxjs/observable/dom/ajax';
import {of} from 'rxjs/observable/of';
// rxJS operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/retry';

import reducers from '../reducers';
import epics from '../epics';

const epicMiddleware = createEpicMiddleware(epics, {
    dependencies: {
        getJSON: ajax.getJSON,
        of
    }
});

const store = createStore(reducers, applyMiddleware(epicMiddleware));

export default store;

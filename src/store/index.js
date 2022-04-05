import {allReducers} from './allReducers';
import {createStore} from 'redux';

export const store = createStore(allReducers);

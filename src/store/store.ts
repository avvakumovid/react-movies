import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers/rootReducers';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export type MovieDispatch = typeof store.dispatch


declare global {
    interface Window {
        store?: any;
    }
}
window.store = store.getState()
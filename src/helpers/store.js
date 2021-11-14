import {createStore, applyMiddleware} from 'redux';
import {rootReducer} from "../reducers/rootReducer";
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, 
        loggerMiddleware
    )
)
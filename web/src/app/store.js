/**
 * Created by tottokotkd on 2016/12/27.
 */

import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {reducer} from './reducer'

const middlewares = [thunk, promise];
if (process.env.NODE_ENV != 'production') {
    const logger = createLogger({
        actionTransformer: action => ({
            ...action,
            type: String(action.type),
        })});
    middlewares.push(logger);
}

export const configureStore = () => createStore(
    reducer,
    applyMiddleware(...middlewares)
);

import { combineReducers, applyMiddleware, createStore } from 'redux';
import {Provider} from 'react-redux'
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

import {reducer} from './reducer/user'
import {SignUpContainer} from './container/signUp'

const logger = createLogger();
const store = createStore(
    reducer,
    applyMiddleware(thunk, promise, logger)
);

export const App =
    <Provider store={store}>
        <SignUpContainer />
    </Provider>;

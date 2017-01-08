/**
 * Created by tottokotkd on 2016/12/16.
 */

import * as React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

import {AppContainer} from './container/App'
import {configureStore} from './store'

export const RootProvider =
        <Provider store={configureStore()}>
            <AppContainer />
        </Provider>;

render(RootProvider, document.getElementById('app'));

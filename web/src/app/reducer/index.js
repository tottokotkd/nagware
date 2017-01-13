/**
 * Created by tottokotkd on 03/01/2017.
 */

import {combineReducers} from 'redux'
import {user} from './user'
import {app} from './app'

export const reducer = combineReducers({user, app});

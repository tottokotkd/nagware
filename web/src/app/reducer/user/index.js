/**
 * Created by tottokotkd on 2016/12/16.
 */

import {combineReducers} from 'redux'
import {lang} from './lang'
import {account} from './account'

export const user = combineReducers({account, lang});

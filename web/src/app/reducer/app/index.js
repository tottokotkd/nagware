/**
 * Created by tottokotkd on 2017/01/11.
 */

import * as Type from '../../constant/ActionType'
import * as Mode from '../../constant/Mode'
import assign from 'lodash/assign'

const defaultState = () => {
    return {
        mode: Mode.INDEX
    }
};

export const app = (state = defaultState(), action) => {
    const update = newValue => assign({}, state, newValue);
    switch (action.type) {
        case Type.SET_MODE:
            return update({mode: action.mode});
    }
    return state;
};

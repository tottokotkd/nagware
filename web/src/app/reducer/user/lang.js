/**
 * Created by tottokotkd on 03/01/2017.
 */

import * as ActionType from '../../constant/ActionType'
import {languages, msgData} from '../../intl'

const defaultState = () => {
    return {...msgData[languages.en.code], languages}
};

export function lang(state = defaultState(), action) {
    const update = newValue => {
        const result = {};
        Object.assign(result, state, newValue);
        return result;
    };
    switch (action.type) {
        case ActionType.SET_LANGUAGE: {
            const {locale, messages} = action;
            return update({locale, messages});
        }
    }
    return state;
}

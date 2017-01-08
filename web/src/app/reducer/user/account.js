/**
 * Created by tottokotkd on 03/01/2017.
 */

import * as ActionType from '../../constant/ActionType'
const defaultState = () => {
    return {}
};

export function account(state = defaultState(), action) {
    switch (action.type) {
        case ActionType.SIGN_UP:
            return {username: action.username, mail: action.mail, password: action.password}
    }
    return state;
}

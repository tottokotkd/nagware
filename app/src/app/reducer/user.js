/**
 * Created by tottokotkd on 2016/12/16.
 */

import * as ActionType from '../constant/ActionType'

export function reducer(state = {}, action) {
    switch (action.type) {
        case ActionType.SIGN_UP:
            return {
                username: action.username,
                password: action.password,
                mail: action.mail,

            }
    }
    return state;
}

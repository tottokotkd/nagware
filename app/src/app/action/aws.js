/**
 * Created by tottokotkd on 2016/12/15.
 */

import * as ActionType from '../constant/ActionType'

export function signUp(username, mail, password) {
    return {
        type: ActionType.SIGN_UP,
        username, mail, password
    }
}

/**
 * Created by tottokotkd on 03/01/2017.
 */

import * as Type from '../constant/ActionType'
import {msgData} from '../intl'

export const setLanguage = language => {
    const {locale, messages} = msgData[language];
    return {type: Type.SET_LANGUAGE, locale, messages};
};

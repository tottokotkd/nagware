/**
 * Created by tottokotkd on 03/01/2017.
 */

import {createSelector} from'reselect'
import sortBy from 'lodash/sortBy'

export const getLanguages = createSelector(
    state => state.user.lang.languages,
    languages => {
        const keys = Object.values(languages);
        return sortBy(keys, 'code')
    }
);

export const watchLanguage = createSelector(
    state => state.user.lang.locale,
    locale => locale
);

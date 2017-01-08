/**
 * Created by tottokotkd on 03/01/2017.
 */

import * as React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {injectIntl} from 'react-intl'

import {LangSelect} from '../component/LangSelect'
import * as Selector from '../selector'
import * as UserActions from '../action/user'

const mapStateToProps = state => {
    return {
        languages: Selector.getLanguages(state),
        watch: Selector.watchLanguage(state)
    }
};
const mapDispatchToProps = dispatch => {
    return bindActionCreators({select: UserActions.setLanguage}, dispatch);
};

export const LangSelectContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(LangSelect));

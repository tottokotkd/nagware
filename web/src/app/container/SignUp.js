/**
 * Created by tottokotkd on 2016/12/16.
 */

import * as React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {injectIntl} from 'react-intl'

import * as AwsActions from '../action/aws'
import * as ActionType from '../constant/ActionType'
import {SignUp} from '../component/SignUp'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AwsActions, dispatch);
}

export const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(injectIntl(SignUp));

/**
 * Created by tottokotkd on 2016/12/16.
 */

import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import * as AwsActions from '../action/aws'
import {SignUp} from '../component/SignUp'

function mapStateToProps(state) {
    return state
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AwsActions, dispatch)
}

export const SignUpContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUp);

import * as React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';

import * as AwsActions from '../action/aws'
import {App} from '../component/App'

const mapStateToProps = state => {return{locale: state.user.lang.locale, messages: state.user.lang.messages}};
export const AppContainer = connect(mapStateToProps)(App);

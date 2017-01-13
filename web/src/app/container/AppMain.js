import * as React from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux';
import {AppMain} from '../component/AppMain'
import * as Selector from '../selector'
import * as Action from '../action/app'

const mapStateToProps = state => {
    return {
        mode: Selector.getAppMode(state),
        watch: Selector.watchLanguage(state)
}};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setMode: Action.setMode}, dispatch);
};

export const AppMainContainer = connect(mapStateToProps, mapDispatchToProps)(AppMain);

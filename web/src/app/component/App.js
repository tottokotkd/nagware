/**
 * Created by tottokotkd on 2016/12/27.
 */

import React from 'react'
const {Component, PropTypes} = React;

import {IntlProvider, addLocaleData} from 'react-intl'
import ja from 'react-intl/locale-data/ja'
addLocaleData([...ja]);

import {AppMain} from './AppMain'

export class App extends Component {
    render() {
        return (
            <IntlProvider locale={this.props.locale} messages={this.props.messages}>
                <AppMain/>
            </IntlProvider>
        )
    }
}

App.propTypes= {
    locale: PropTypes.string,
    messages: PropTypes.any
};

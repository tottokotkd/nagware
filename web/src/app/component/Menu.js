/**
 * Created by tottokotkd on 2017/01/12.
 */

import * as React from 'react'
import {intlShape, injectIntl} from 'react-intl'
import {Dropdown} from 'semantic-ui-react';
const {PropTypes, Component} = React;

import {commonWords} from '../intl/index'

export class LangSelect extends Component {

    render() {
        const onChange = (e, {value}) => this.props.select(value);
        const options = this.props.languages.map(l => {return {text: l.text, value: l.code}});
        return (
            <Dropdown text={this.props.intl.formatMessage(commonWords.selectLanguage)} floating button onChange={onChange} options={options} />
        )
    }
}

const langShape = PropTypes.shape({
    code: PropTypes.string,
    text: PropTypes.string
});

LangSelect.propTypes = {
    // from state
    languages: PropTypes.arrayOf(langShape).isRequired,

    // dispatcher
    select: PropTypes.func.isRequired,

    // react-intl
    intl: intlShape.isRequired
};

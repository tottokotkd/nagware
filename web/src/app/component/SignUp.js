/**
 * Created by tottokotkd on 2016/12/16.
 */

import * as React from 'react'
import {defineMessages, intlShape} from 'react-intl'
import {Form, Button} from 'semantic-ui-react';
const {PropTypes, Component} = React;

import {commonWords} from '../intl/index'
import {getCognitoUserPool} from '../lib/aws'

export class SignUp extends Component {

    render() {
        const handleSubmit = (e, {formData}) => {
            e.preventDefault();
            this.props.signUp(getCognitoUserPool(), formData.username, formData.mail, formData.password)
        };

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Input label={this.props.intl.formatMessage(commonWords.username)} name="username" type='text' defaultValue={this.props.username} required />
                <Form.Input label={this.props.intl.formatMessage(commonWords.mail)} name="mail" type='email' defaultValue={this.props.mail} required />
                <Form.Input label={this.props.intl.formatMessage(commonWords.password)} name='password' type='password' defaultValue={this.props.password} required />
                <Button type='submit'>{this.props.intl.formatMessage(commonWords.submit)}</Button>
            </Form>
        )
    }
}

SignUp.propTypes = {
    username: PropTypes.string,
    mail: PropTypes.string,
    password: PropTypes.string,
    signUp: PropTypes.func.isRequired,

    // react-intl
    intl: intlShape
};

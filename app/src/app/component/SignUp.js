/**
 * Created by tottokotkd on 2016/12/16.
 */

import * as React from 'react'
import * as UI from 'semantic-ui-react';

export class SignUp extends React.Component {

    handleSubmit(e, { formData }) {
        e.preventDefault();
        this.props.signUp(formData.name, formData.mail, formData.pass)
    };

    render() {
        return (
            <UI.Form onSubmit={this.handleSubmit.bind(this)}>
                <UI.Form.Input label='username' name="name" type='text' required />
                <UI.Form.Input label='mail' name="mail" type='email' required />
                <UI.Form.Input label='Enter Password' name='pass' type='password' required />
                <UI.Button type='submit'>Submit</UI.Button>
            </UI.Form>
        )
    }
}

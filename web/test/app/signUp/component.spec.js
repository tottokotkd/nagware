/**
 * Created by tottokotkd on 2016/12/30.
 */

import React from 'react'
import {renderToStaticMarkup} from 'react-dom/server'
import {IntlProvider} from 'react-intl'
import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import * as sinon from 'sinon'
import {Form, Button} from 'semantic-ui-react'
import _ from 'lodash'

import {SignUp} from '../../../src/app/component/SignUp'
import {commonWords, msgData, languages} from '../../../src/app/intl/index'

describe('SignUp Component', () => {

    function shallowForm(props) {
        const p = _.defaults(props, {
            intl: new IntlProvider({locale: 'en'}, {}).getChildContext().intl,
            username: null,
            mail: null,
            password: null,
            signUp: () => {},
        });
        return shallow(<SignUp {...p} />);
    }

    describe('components', () => {

    });

    describe('intl', () => {
        Object.values(languages).forEach(lang => {
            const msg = msgData[lang.code];
            describe(`with language ${msg.locale}`, () => {
                it('renders three Input & submit Button', () => {
                    const {intl} = (new IntlProvider({...msg}, {})).getChildContext();
                    const wrapper = shallowForm({intl});
                    expect(wrapper.containsAllMatchingElements([
                        <Form.Input label={intl.formatMessage(commonWords.username)} />,
                        <Form.Input label={intl.formatMessage(commonWords.mail)} />,
                        <Form.Input label={intl.formatMessage(commonWords.password)} />,
                        <Button type='submit'>{intl.formatMessage(commonWords.submit)}</Button>,
                    ])).to.be.true;
                    // expect(wrapper.find(Form).containsAllMatchingElements([
                    //     <Form.Input label={intl.formatMessage(commonWords.username)} />,
                    //     <Form.Input label={intl.formatMessage(commonWords.mail)} />,
                    //     <Form.Input label={intl.formatMessage(commonWords.password)} />,
                    //     <Button type='submit'>{intl.formatMessage(commonWords.submit)}</Button>
                    // ])).to.be.true;
                    // expect(wrapper.someWhere(n => n.containsAllMatchingElements([
                    //     <Form.Input label={intl.formatMessage(commonWords.username)} name="username" type='text' required />,
                    //     <Form.Input label={intl.formatMessage(commonWords.mail)} name="mail" type='email' required />,
                    //     <Form.Input label={intl.formatMessage(commonWords.password)} name='password' type='password' required />,
                    //     <Button type='submit'>{intl.formatMessage(commonWords.submit)}</Button>
                    // ]))).to.be.true;
                });
            });
        });
    });



    // it('calls props.signUp() by submit event', () => {
    //     const signUp = sinon.spy();
    //     const wrapper = mount(<SignUp signUp={signUp} />);
    //     wrapper.simulate('submit');
    //     expect(signUp.calledOnce).to.be.true;
    // });
    //
    // it('sets default values of inputs', () => {
    //     const signUp = sinon.spy();
    //     const formData = {username: 'a', mail: 'b', password: 'c',};
    //     const wrapper = mount(<SignUp signUp={signUp} {...formData}/>);
    //     wrapper.simulate('submit');
    //     expect(signUp.calledWith(formData.username, formData.mail, formData.password)).to.be.true;
    // });
    //
    // it('handles values of inputs', () => {
    //     const signUp = sinon.spy();
    //     const formData = {username: 'a', mail: 'b', password: 'c',};
    //     const wrapper = mount(<SignUp signUp={signUp} {...formData}/>);
    //     wrapper.find(<Form.Input name="username"/>).simulate('change', {target: {value: 'My new value'}});
    //     wrapper.simulate('submit');
    //         //
    //         // <Form.Input label='mail' name="mail" type='email' required />,
    //         // <Form.Input label='Enter Password' name='password' type='password' required />,
    //     expect(signUp.calledWith(formData.username, formData.mail, formData.password)).to.be.true;
    // });
});

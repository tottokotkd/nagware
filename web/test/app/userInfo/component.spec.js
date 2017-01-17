/**
 * Created by tottokotkd on 2017/01/14.
 */

import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import React from 'react'
import {IntlProvider} from 'react-intl'
import _ from 'lodash'

import {UserInfo} from './'
import {msgData, languages} from '../../../src/app/intl/index'

describe('UserInfo', () => {

    function shallowUserInfo(conf) {
        const props = _.defaults(conf, {
            intl: new IntlProvider({locale: 'en'}, {}).getChildContext().intl
        });
        return shallow(<UserInfo {...props}/>);
    }

    describe('PropTypes', () => {
        it('has propTypes', () => {
            expect(UserInfo.propTypes.select).to.be.not.null;
            expect(UserInfo.propTypes.languages).to.be.not.null;
            expect(UserInfo.propTypes.intl).to.be.not.null;
            expect(UserInfo.propTypes.watch).to.be.not.null
        });
    });

    describe('Components', () => {
        it('handles event', () => {
            const wrapper = shallowUserInfo({});
            expect(wrapper).to.be.null;
        });
    });

    describe('Internationalization', () => {
        Object.values(languages).forEach(lang => {
            const msg = msgData[lang.code];
            describe(`with language ${msg.locale}`, () => {
                it('renders text', () => {
                    const {intl} = (new IntlProvider({...msg}, {})).getChildContext();
                    const wrapper = shallowUserInfo({intl});
                    expect(wrapper.matchesElement(<div>{intl.formatMessage('id')}</div>));
                });
            });
        });
    });
});

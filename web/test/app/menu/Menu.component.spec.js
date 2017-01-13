/**
 * Created by tottokotkd on 2017/01/12.
 */

import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import React from 'react'
import {IntlProvider} from 'react-intl'
import _ from 'lodash'

import {Menu} from './Menu'
import {msgData, languages} from '../../../src/app/intl/index'

describe('Menu Component', () => {

    function shallowMenu(conf) {
        const props = _.defaults(conf, {
            intl: new IntlProvider({locale: 'en'}, {}).getChildContext().intl
        });
        return shallow(<Menu {...props}/>);
    }

    describe('PropTypes', () => {

    });

    describe('events', () => {
        it('handles event', () => {
            const wrapper = shallowMenu({});
            expect(wrapper).to.be.null;
        });
    });

    describe('intl', () => {
        Object.values(languages).forEach(lang => {
            const msg = msgData[lang.code];
            describe(`with language ${msg.locale}`, () => {
                it('renders text', () => {
                    const {intl} = (new IntlProvider({...msg}, {})).getChildContext();
                    const wrapper = shallowDropdown({intl});
                    expect(wrapper.matchesElement(<div>{intl.formatMessage('id')}</div>)).to.be.true;
                });
            });
        });
    });
});

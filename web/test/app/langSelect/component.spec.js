/**
 * Created by tottokotkd on 2017/01/08.
 */

import {shallow, mount} from 'enzyme'
import {expect} from 'chai'
import sinon from 'sinon'

import React from 'react'
import {IntlProvider} from 'react-intl'
import {Dropdown} from 'semantic-ui-react'
import _ from 'lodash'

import {LangSelect} from '../../../src/app/component/LangSelect'
import {commonWords, msgData, languages} from '../../../src/app/intl/index'

describe('LangSelect Component', () => {

    function shallowDropdown(props) {
        const {intl, languages, select, watch} = _.defaults(props, {
            intl: new IntlProvider({locale: 'en'}, {}).getChildContext().intl,
            languages: [{code: 'testCode', value: 'testValue'}],
            select: () => {},
            watch: true
        });
        return shallow(<LangSelect intl={intl} languages={languages} select={select} watch={watch}/>);
    }

    describe('components', () => {
        it('calls onChange event', () => {
            const select = sinon.spy();
            const wrapper = shallowDropdown({select});
            wrapper.simulate('change', null, {value: 'testValue'});
            expect(select.calledWith('testValue'));
        });
    });

    describe('intl', () => {
        Object.values(languages).forEach(lang => {
            const msg = msgData[lang.code];
            describe(`with language ${msg.locale}`, () => {
                it('renders Dropdown text', () => {
                    const {intl} = (new IntlProvider({...msg}, {})).getChildContext();
                    const wrapper = shallowDropdown({intl});
                    expect(wrapper.matchesElement(<Dropdown text={intl.formatMessage(commonWords.selectLanguage)} />));
                });
            });
        });
    });
});

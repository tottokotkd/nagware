/**
 * Created by tottokotkd on 2017/01/02.
 */

import * as React from 'react'
import {defineMessages} from 'react-intl'

const directory = 'index';

const commonWordGroup = 'commonWordGroup';
export const commonWords = defineMessages({
    username: {id: `${directory}.${commonWordGroup}.username`, defaultMessage: "user name", description: "simple expression for user's name"},
    mail: {id: `${directory}.${commonWordGroup}.mail`, defaultMessage: "mail", description: "simple expression for mail"},
    password: {id: `${directory}.${commonWordGroup}.password`, defaultMessage:  "password", description: "simple expression for password"},
    submit: {id: `${directory}.${commonWordGroup}.submit`, defaultMessage:  "submit", description: "simple expression for submit"},
    selectLanguage: {id: `${directory}.${commonWordGroup}.selectLanguage`, defaultMessage:  "select language", description: "simple expression for 'select language'"},
});

import * as en from './lang/en'
import * as ja from './lang/ja'

export const languages = {
    en: {code: 'en', text: 'English'},
    ja: {code: 'ja', text: '日本語'},
};

export const msgData = {};
msgData[languages.en.code] = {locale: "en-US", messages: en};
msgData[languages.ja.code] = {locale: "ja", messages: ja};

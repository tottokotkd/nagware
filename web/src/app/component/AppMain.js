/**
 * Created by tottokotkd on 03/01/2017.
 */

import React from 'react'
const {Component, PropTypes} = React;

import * as UI from 'semantic-ui-react';
import {Dropdown} from 'semantic-ui-react';
import {SignUpContainer} from '../container/SignUp'
import {LangSelectContainer} from '../container/LangSelect'

export class AppMain extends Component {
    render() {
        return (
            <div>
                <div className="ui container" style={{paddingTop: '1em'}}>
                    <UI.Header as='h2' icon='newspaper' content='fos' subheader="more criticism and sympathy for web" />
                    <UI.Menu pointing secondary items={[
                        { active: true, name: 'Editorials' },
                        { name: 'Reviews' },
                        { name: 'Upcoming Events', position: 'right'},
                    ]} />
                </div>
                <LangSelectContainer/>
                <div className="ui container" style={{paddingTop: '2em'}}>
                    <SignUpContainer/>
                </div>
            </div>
        )
    }
}

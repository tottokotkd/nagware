/**
 * Created by tottokotkd on 03/01/2017.
 */

import React from 'react'
const {Component, PropTypes} = React;

import * as UI from 'semantic-ui-react';
import {Dropdown} from 'semantic-ui-react';
import {SignUpContainer} from '../container/SignUp'
import {LangSelectContainer} from '../container/LangSelect'

import * as Mode from '../constant/Mode'

export class AppMain extends Component {

    content = mode => {
        switch (mode) {
            case Mode.INDEX: {
                return (
                    <div>
                        <SignUpContainer/>
                    </div>
                );
            }
            case Mode.SETTING: {
                return (
                    <div>
                        <LangSelectContainer/>
                    </div>
                );
            }
            default:
                return null;
        }
    };

    render() {
        return (
            <div>
                <div className="ui container" style={{paddingTop: '1em'}}>
                    <UI.Header as='h2' icon='newspaper' content='fos' subheader="more criticism and sympathy for web" />
                    <UI.Menu pointing secondary items={[
                        { name: 'top', onClick: () => this.props.setMode(Mode.INDEX), active: this.props.mode == Mode.INDEX },
                        { name: 'setting', onClick: () => this.props.setMode(Mode.SETTING), active: this.props.mode == Mode.SETTING },
                        { name: 'Upcoming Events', position: 'right'},
                    ]} />
                </div>
                <div className="ui container" style={{paddingTop: '2em'}}>
                    {this.content(this.props.mode)}
                </div>
            </div>
        )
    }
}

AppMain.PropTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func.isRequired,
    watch: PropTypes.any.isRequired
};

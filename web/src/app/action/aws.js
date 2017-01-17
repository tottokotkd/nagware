/**
 * Created by tottokotkd on 2016/12/15.
 */

import * as ActionType from '../constant/ActionType'
import { CognitoUserPool, CognitoUserAttribute, CognitoUser } from 'amazon-cognito-identity-js';

export function signUp(userPool, username, mail, password) {

    const attributeList = [
        {Name: 'name', Value: username},
        {Name : 'email', Value : 'tottokotkd@me.com'}
    ].map(atr => new CognitoUserAttribute(atr));


    userPool.signUp('tottokotkd', 'Password1!', attributeList, null, function(err, result){
        if (err) {
            alert(err);
            return {type: ActionType.SIGN_UP};
        }
        const cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
        return {type: ActionType.SIGN_UP};
    });
}

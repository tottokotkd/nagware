/**
 * Created by tottokotkd on 2017/01/16.
 */

import { CognitoUserPool　} from 'amazon-cognito-identity-js';

export function getCognitoUserPool(UserPoolId = 'us-east-1_G0NmJihPg', ClientId = '5kiuhhkifs7m677s9gh8uhcsc4') {
    return new CognitoUserPool({UserPoolId, ClientId});
}

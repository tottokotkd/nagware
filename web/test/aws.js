/**
 * Created by tottokotkd on 2017/01/10.
 */

import * as AWS from 'aws-sdk'

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});

global.AWS = AWS;

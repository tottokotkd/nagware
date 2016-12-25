/**
 * Created by tottokotkd on 25/12/2016.
 */

// const AWS = require('aws-sdk');
import AWS from 'aws-sdk'

export class TestLib {
    static hello(event, context, callback) {

        const dynamoDB = new AWS.DynamoDB();
        console.log('working');

        dynamoDB.listTables(null, function(err, data) {
            if (err) {
                console.log(err, err.stack);
            } else {
                console.log(data);
                callback(null, {
                    statusCode: 200,
                    body: JSON.stringify({
                        message: 'Go Serverless v1.0! Your function executed successfully!',
                        input: event,
                        tables: data
                    }),
                });
                // php.print_r(data);
            }
        });
    }
};

/**
 * Created by tottokotkd on 09/01/2017.
 */

import {expect} from 'chai'

// import * as AWS from 'aws-sdk'

describe('user info actions', function() {
    this.timeout(0);
    it('works with docker', done => {
        // return dynamoDB.createTable({
        //     TableName : "Movies",
        //     KeySchema: [
        //         { AttributeName: "year", KeyType: "HASH"},  //Partition key
        //         { AttributeName: "title", KeyType: "RANGE" }  //Sort key
        //     ],
        //     AttributeDefinitions: [
        //         { AttributeName: "year", AttributeType: "N" },
        //         { AttributeName: "title", AttributeType: "S" }
        //     ],
        //     ProvisionedThroughput: {
        //         ReadCapacityUnits: 10,
        //         WriteCapacityUnits: 10
        //     }
        // }).promise()
        //     .then(data => expect(data).to.equal(0));


        var dynamodb = new AWS.DynamoDB();

        var params = {
            TableName : "Movies2",
            KeySchema: [
                { AttributeName: "year", KeyType: "HASH"},  //Partition key
                { AttributeName: "title", KeyType: "RANGE" }  //Sort key
            ],
            AttributeDefinitions: [
                { AttributeName: "year", AttributeType: "N" },
                { AttributeName: "title", AttributeType: "S" }
            ],
            ProvisionedThroughput: {
                ReadCapacityUnits: 10,
                WriteCapacityUnits: 10
            }
        };

        dynamodb.createTable(params, function(err, data) {
            if (err) {
                console.error("Unable to create table. Error JSON:", JSON.stringify(err, null, 2));
                done();
            } else {
                console.log("Created table. Table description JSON:", JSON.stringify(data, null, 2));
                done()
            }
        });
    });
});

/**
 * Created by tottokotkd on 09/01/2017.
 */

import {expect} from 'chai'
import _ from 'lodash'
import * as AWS from 'aws-sdk'

import {createAllTables} from '../../tables'

AWS.config.update({
    region: "us-west-2",
    endpoint: "http://localhost:8000"
});
const dynamoDB = new AWS.DynamoDB();

describe('user info actions', function() {
    this.timeout(0);

    before('create tables', () => {
        return createAllTables(new AWS.DynamoDB());
    });

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

        dynamoDB

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



        dynamoDB.createTable(params, function(err, data) {
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

/**
 * Created by tottokotkd on 2017/01/10.
 */

export const UserInfo = {
    TableName : "UserInfo",
        KeySchema: [
        {AttributeName: "id", KeyType: "HASH"}
    ],
    AttributeDefinitions: [
        {AttributeName: "id", AttributeType: "N"}
    ],
    ProvisionedThroughput: {
        ReadCapacityUnits: 1,
        WriteCapacityUnits: 1
    }
};

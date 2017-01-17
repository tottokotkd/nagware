/**
 * Created by tottokotkd on 2017/01/10.
 */

export const tables = {
    UserInfo: {
        TableName: "UserInfo",
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
    }
};

export function createAllTables(dynamoDB) {
    return dynamoDB.listTables().promise()
        .then(list => Promise.all(
            Object.values(tables)
                .filter(table => !list.includes(table.TableName))
                .map(table => dynamoDB.createTable(table).promise())
            )
        );
}
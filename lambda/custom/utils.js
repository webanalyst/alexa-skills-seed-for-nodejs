
const config = require("./config");
const AWS = require("aws-sdk");

AWS.config.update({
    region: config.dynamo.region
});

const dynamodb = new AWS.DynamoDB.DocumentClient({
    region: config.dynamo.region
});

module.exports = {};
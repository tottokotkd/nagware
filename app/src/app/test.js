/**
 * Created by tottokotkd on 2016/12/13.
 */

var AWSCognito = require('amazon-cognito-identity-js');
var AWS = require('aws-sdk');

var poolData = {
  UserPoolId : 'us-east-1_G0NmJihPg',
  ClientId : '5kiuhhkifs7m677s9gh8uhcsc4'
};


var userPool = new AWSCognito.CognitoUserPool(poolData);

var attributeList = [
  {
    Name : 'email',
    Value : 'tottokotkd@me.com'
  }, {
    Name : 'name',
    Value : 'tottokotkd'
  }
  ].map(function (data) {
  return new AWSCognito.CognitoUserAttribute(data);
  });

userPool.signUp('username', 'Password123!!!', attributeList, null, function(err, result){
  if (err) {
    console.log(err);
    return;
  }
  cognitoUser = result.user;
  console.log('user name is ' + cognitoUser.getUsername());
  console.log(result)
});

AWS.config.region = 'us-east-1';
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: 'us-east-1:dbee8713-c3af-4567-9bbd-46ff7aaf228c'
  // ,
  // Logins: {
  //   'api.twitter.com': "110440023-J6ike2bHNAQfEjwc0knEt9qwbwS89UShGfUnWtCw;Pa3X6EvavIKfClfJhrwch0QQjAMrzC3S3bQN4PRUTwenJ"
  // }
});

// // Obtain AWS credentials
// AWS.config.credentials.get(function(){
//   var lambda = new AWS.Lambda();
//
//
//   lambda.listFunctions(function(err, data) {
//     console.log('list', data);
//     AWS.config.credentials.params.Logins = {};
//     AWS.config.credentials.params.Logins['api.twitter.com'] = "110440023-J6ike2bHNAQfEjwc0knEt9qwbwS89UShGfUnWtCw;Pa3X6EvavIKfClfJhrwch0QQjAMrzC3S3bQN4PRUTwenJ";
//     AWS.config.credentials.expired = true;
//
//
//     AWS.config.credentials.get(function() {
//       var lambda = new AWS.Lambda();
//
//       var params = {
//         FunctionName: 'nwsns-server-dev-get',
//         InvokeArgs: JSON.stringify({
//           "user": "tottokotkd",
//           "url": "google.com"
//         })
//       };
//
//       lambda.invokeAsync(params, function(err, data) {
//         if (err) console.log(err, err.stack);
//         else     console.log(data);
//       });
//     });
//     });
//
//   });

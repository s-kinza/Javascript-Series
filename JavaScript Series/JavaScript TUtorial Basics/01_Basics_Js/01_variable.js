const accountId = 144553     // const should not changed this value  (looked value)
let accountEmail = "kinza@google.com"   //
var accountPassword = "123456"
accountCity = "karachi"
let accountState;

//  accountId = 2   // not allowed



accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "dubai"


console.log(accountId);

/*
prefer not to use var
because of issue in block scoop and function scoop 
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
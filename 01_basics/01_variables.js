const accountId=12345
let accountEmail="abc@gmail.com"
var accountPassword="787899"
accountCity="cuttack"
let accountState;

// accountId=9 not allowed
console.log(accountId);
accountEmail="bhu@gmail.com"
accountPassword="456789"
accountCity="bhubaneswar"

/*
prefer let and const due to block and function scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

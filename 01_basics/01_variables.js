const accountId =  112345678;
let accountEmail = "SatyamMishra";
var accountPassword = "12345";
accountcity = "Noida";
let accountState;

// accountId = 2;
accountEmail = 'ssatyam05';
accountPassword = '54321';
accountcity = "Lucknow";

console.log(accountId);

/*
Prefer not to use var
Because of issue in block scope and functional scope;
*/

console.table([accountId, accountEmail, accountPassword, accountcity, accountState]);

const accountId = 12345
let emailID = "suraj@google.com"
var acccountPassword = "65421"
acccountCity = "hisar"

// accountId = 2 // not allowed value changing of const keyword
emailID = "surj@gmail.com"
acccountPassword = "4321"
acccountCity = "Hansi"
let accountState;
console.table([emailID,acccountPassword,acccountCity,accountState])
//.table used to print multiple values in once
console.log(accountId);
/* prefer not to use var because of issue in 
bloack scope and functional scope */


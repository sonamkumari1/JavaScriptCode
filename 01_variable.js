const accountId=123
let accountEmail="abc@gmail.com"
var password="1234"
accountCity="Allahabad"
let accountState;

//accountId=567; //TypeError: Assignment to constant variable.

accountEmail="xyz@gmail.com"
password="4567"
accountCity="delhi"

console.table([accountId, accountEmail, password,accountCity,accountState]);

// output:- 
// ┌─────────┬─────────────────┐
// │ (index) │ Values          │
// ├─────────┼─────────────────┤
// │ 0       │ 123             │
// │ 1       │ 'xyz@gmail.com' │
// │ 2       │ '4567'          │
// │ 3       │ 'delhi'         │
// │ 4       │ undefined       │
// └─────────┴─────────────────┘
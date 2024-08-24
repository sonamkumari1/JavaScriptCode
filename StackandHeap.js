
// Primitive datatypes->  call by value (string,number,boolean,null,undefined,BigInt,symbol) ->Stack memory

// Reference/Non primitive data types -> call by reference ( array,object, function) -> heap memory

// JavaScript is a dynamically typed language. This means that you don't need to specify the data type of a variable when you declare it.


//stack
let originalValue="sonam"

let changeValue=originalValue
changeValue="xyz"

console.log(changeValue);   //xyz
console.log(originalValue)   //sonam

//not change original value only create a copy


//heap

let userOne={
    email: "xyz@gmail.com",
     pass: "xyz"
}

let userTwo=userOne

userTwo.email="sonam@gmail.com"

console.log(userOne.email)    //sonam@gmail.com
console.log(userTwo.email)    //sonam@gmail.com

//heap create a reference value so if you want change then change original value also
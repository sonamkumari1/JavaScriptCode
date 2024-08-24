//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
console.log(typeof score);              //number

const scoreValue = 100.3
console.log(typeof scoreValue);        //number

const isLoggedIn = false
console.log(typeof isLoggedIn);      //boolean

const outsideTemp = null
console.log(typeof outsideTemp);      //object

let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);      //false
console.log(typeof anotherId);       //symbol

 const bigNumber = 3456543576654356754n
 console.log(typeof bigNumber);            //bigint


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);                         //object

let myObj = {
    name: "hitesh",
    age: 22,
}
console.log(typeof myObj);                        //object


const myFunction = function(){
    console.log("Hello world");
}
console.log(typeof myFunction);                  //function


/* 1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */
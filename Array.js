// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

//console.log(myArr[1]);       //1

// Array methods

myArr.push(6)
myArr.push(7)
myArr.pop()

//console.log( myArr);      
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]


myArr.unshift(9)
//console.log( myArr); 

// [
//     9, 0, 1, 2,
//     3, 4, 5, 6
// ]

myArr.shift()
//console.log( myArr); 
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

 console.log(myArr.includes(9));    //false
 console.log(myArr.indexOf(3));     //3

console.log(myArr);
// [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const newArr = myArr.join()
console.log( newArr);    //0,1,2,3,4,5,6


// slice, splice

console.log("A ", myArr);
// A  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const myn1 = myArr.slice(1, 3)      
console.log(myn1);         //[ 1, 2 ]

console.log("B ", myArr);
// B  [
//     0, 1, 2, 3,
//     4, 5, 6
//   ]

const myn2 = myArr.splice(1, 3)
console.log(myn2);         //[ 1, 2, 3 ]

console.log("C ", myArr);      //C  [ 0, 4, 5, 6 ]


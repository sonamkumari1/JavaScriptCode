// for

for (let i = 0; i <= 5; i++) {
    const element = i;
    if (element == 2) {
        console.log("2 is best number");
    }
    console.log(element); 
//0
// 1
// 2 is best number
// 2
// 3
// 4
// 5
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner loop value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );      // all table is printed 1 to 10  Inner loop value 10 and inner loop 10 10*10 = 100
   }
    
}
let myArray = ["flash", "batman", "superman"]
console.log(myArray.length);   //3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 
// flash
// batman
// superman
    
}


//+++++++++++++++++++++++++++++++ break and continue ++++++++++++++++++++++++++++++++++

for (let index = 1; index <= 5; index++) {
    if (index == 3) {
       // console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
//     output:-
//     Value of i is 1
//     Value of i is 2
}

for (let index = 1; index <= 5; index++) {
    if (index == 3) {
        // console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
//     output:-
//     Value of i is 1
//     Value of i is 2
//     Value of i is 4
//     Value of i is 5
}
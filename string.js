const name="sonam"
const number=30

console.log(`name:${name} and age ${number}`)   //name:sonam and age 30

const gameName = new String('sonam-sc-com')

console.log(gameName[0]);                     //s
console.log(gameName.__proto__);              //{}

console.log(gameName.length);                 //12

console.log(gameName.toUpperCase());          //SONAM-SC-COM

console.log(gameName.charAt(2));              //n

console.log(gameName.indexOf('n'));           //2

const newString = gameName.substring(0, 4)
console.log(newString);                        //sona

const anotherString = gameName.slice(-6, 2)
console.log(anotherString);                    //

const newStringOne = "   sonam    "
console.log(newStringOne);                     //   sonam
console.log(newStringOne.trim());              //sonam

const url = "https://sonam.com/sonam%20kumari"

console.log(url.replace('%20', '-'))            //https://sonam.com/sonam-kumari

console.log(url.includes('sundar'))            //false

console.log(gameName.split('-'));              //[ 'sonam', 'sc', 'com' ]


const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

                                                          //SLICE

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]

const str = 'The quick brown fox jumps over the lazy dog.';

console.log(str.slice(31));
// Expected output: "the lazy dog."

console.log(str.slice(4, 19));
// Expected output: "quick brown fox"

console.log(str.slice(-4));
// Expected output: "dog."

console.log(str.slice(-9, -5));
// Expected output: "lazy"

                                                                //
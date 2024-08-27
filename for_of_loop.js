// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}

const greetings = "Hii xyz"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}
//     output:
//     Each char is H
//     Each char is i
//     Each char is i
//     Each char is
//     Each char is x
//     Each char is y
//     Each char is z


// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map);
// output:-
// Map(3) {
//     'IN' => 'India',
//     'USA' => 'United States of America',
//     'Fr' => 'France'
//   }

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
// output:-
// IN :- India
// USA :- United States of America
// Fr :- France

const myObject = {
    game1: 'NFS',                  //not working
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }
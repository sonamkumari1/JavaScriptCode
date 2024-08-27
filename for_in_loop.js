const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`);
}
// output:-
// js shortcut is for javascript
// cpp shortcut is for C++
// rb shortcut is for ruby

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}
// output:
// js
// rb
// py
// java
// cpp
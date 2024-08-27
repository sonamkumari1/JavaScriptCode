function add(a,b){
    console.log(a+b)
}
// add(3,4)
// add(3, "a")     //3a
// add("a",3)       //a3


function add(a,b){
    return a+b
}
// const res=add(3,4)
// console.log(res)

//console.log(add(3,4))

function cartprice(...num1){
 return num1;
}
console.log(cartprice(200,300,400)) //[ 200, 300, 400 ]
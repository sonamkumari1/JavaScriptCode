const dream =  () => {
    let username = "microsoft"
    console.log(this);
}
dream()

const addTwo = (num1, num2) => {
    return num1 + num2
}
console.log(addTwo(2,3))  //5


const addTwo2 = (num1, num2) =>  num1 + num2
console.log(addTwo2(2,3)) //5


const addTwo3 = (num1, num2) => ( num1 + num2 )
console.log(addTwo3(2,3))  //5


const dream2 = (num1, num2) => ({username: "google"})
console.log(dream2(2,3))  //{ username: 'google' }


const myArray = [2, 5, 3, 7, 8]
myArray.forEach((e)=>{
    console.log(e)
})
// Dates

let myDate = new Date()
console.log(myDate.toString());                 //Sat Aug 24 2024 22:28:46 GMT+0530 (India Standard Time)
console.log(myDate.toDateString());             //Sat Aug 24 2024
console.log(myDate.toLocaleString());           //24/8/2024, 10:28:46 pm
console.log(typeof myDate);                     //object

let myCreatedDate = new Date(2023, 0, 23)  
console.log(myCreatedDate.toLocaleString());     //23/1/2023, 12:00:00 am

let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDate1.toLocaleString());         // 23/1/2023, 5:03:00 am

let myCreatedDate2 = new Date("2023-01-14")
console.log(myCreatedDate2.toLocaleString());         // 14/1/2023, 5:30:00 am

let myCreatedDate3 = new Date("01-14-2023")
console.log(myCreatedDate3.toLocaleString());         //14/1/2023, 12:00:00 am

let myTimeStamp = Date.now()

console.log(myTimeStamp);                         //1724518726800
console.log(myCreatedDate.getTime());             // 1674412200000
console.log(Math.floor(Date.now()/1000));          //1724518726

let newDate = new Date()
console.log(newDate);                            //2024-08-24T16:58:46.802Z
console.log(newDate.getMonth() + 1);             //8
console.log(newDate.getDay());                   //6

`${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})
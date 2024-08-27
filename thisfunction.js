const user = {
    username: "sonam",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        //  console.log(this);
    }

}
// user.welcomeMessage()

// output:-
// sonam , welcome to website
// {
//   username: 'sonam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

user.username = "sam"
// user.welcomeMessage()  //sam , welcome to website

// console.log(this);   //{}

  function check(){
        let username = "sonam"
        // console.log(this.username);  //undefined
    }
    check()

    
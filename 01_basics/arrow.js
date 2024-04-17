// const object =
// {
//     username:"kaustubh",
//     price:999,

//     logInUser: function() //new way to declare function inside object
//     {
//         console.log(`${this.username},welcome to the website`);
//         console.log(this);
//     }
// }
// object.logInUser()

// console.log(this);

//THE VALIUE OF CONSOLE.LOG  IN VS CODE AND NODE.JS ENVIORNMENT IS {} THAT IS EMPTY OBJECT AND THE VALUE IN BROWSER IS WINDOW WHERE WE CAN ACCES VARIOUS PARAMETERS
//this only works in object not in function

// function user()
// {
//     let user1="kaustubh"
//     console.log(this.user); //this doenot work in function
// }
// user()

// const chai=function()
// {
//     let user1="kaustubh"
//    console.log(this.user);
// }
// chai()

// const chai=()=>
// {
//     let user1="kaustubh"
//    console.log(this.user);
// }
// chai()

// const addTwoNumbers=(num1,num2)=>
// {
//     return num1+num2
// }
// console.log(addTwoNumbers(30,40));


// IMPLICIT ARROW FUNCTIONS MEANS ARROW FUNCTIONS IN A SINGLE LINE WITHOUT {} AND RETURN ALSO NOT REQUIRED

// const addTwoNumbers=(num1,num2)=> num1+num2

// console.log(addTwoNumbers(30,40));
//TO PRINT AN OBJECT THROUGH IMPLICIT ARROW FUNCTION IT IS COMPULASARY TO ADD PARANTHESIS()
// const arow=()=>({user4:"sawant",id:200,})
// console.log(arow())



// IMMEDIATELY INVOKED FUNCTION EXPRESSION(IIFE)
// THE FUNCTION WHICH CAND BE CALLED IMMEDIATELY IN ORDER TO PREVENT ANY POLLUTION FROM GLOBAL SCOPE IS CALLED IIFE
//  the syntax is ()() in first parenthesis normal function is written
// (function databsae()
// {console.log("DB connected");
// })(); NAMED IIFE
// VIMP WHILE ENDING IIFE PUT ; OTHERWISE THE OPERATION WILL NOT END AND GIVE ERROR
// ( arrow = () =>
// {//UNNAMED IIFE  MEANS ARROW FUNCTION
//     console.log(`DB CONNECTED`);
// })();
( arrow = (name) =>
{
    console.log(`DB CONNECTED mr${name} `);
})("kaustubh");
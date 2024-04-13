
// CODE WITHB HARRY
// FUNCTION IS A BLOCK OF CODE WHICH IS WRITEEN SO THAT THERE IS NO NEED OF WRITING CODE REPEATEDLY JUST CALL FUNCTION

// function addTwoNumbers(a,b){
//     console.log(a+b);
// }
// addTwoNumbers(30,20)

// //the value which function returns and the console log returns many not be the asame
// function subTwoNumbers(c,d)
// {
//    let e=c-d;
//    return e //easiest way

// }

// const e=subTwoNumbers(50,30);
// console.log(e);

// function avgTwoNumbers(x,y)
// {
//     return 1+(x+y)/2;
// }


// let f=1
// let g=2
// let h=3
// console.log("the average of f and g is",avgTwoNumbers(f,g));
// console.log("the average of g and h is",avgTwoNumbers(g,h));
// console.log("the average of f and h is",avgTwoNumbers(f,h));

// //FUNCTION NEEDS TO BE CALLED FOR EXECUTION OTHERWISE IT WILL NOT BE EXECUTED

// //THE BELOW IS ARROW FUNCTION THIS IS TE BEST WAY TO DECLARE A FUNCTION
// const hello=()=>{
//     console.log("my name is kaustubh");
// }
// hello()

// //CHAI AND CODE JAVASCRIPT

// function SayMyName()
// {
//     console.log("k");
//     console.log("a");
//     console.log("u");
//     console.log("s");
//     console.log("t");
//     console.log("u");
//     console.log("b");
//     console.log("h");
// }

// SayMyName()

// //ANYTHING WRITEEN AFTER RETURN STATEMENT DOENOT EXECUTE
// //IF EMPTY FUNCTION IS PASSED ()THEN THE RESULT IS UNDEFINED

// function logInUser(username)
// {
//     if (username === undefined)
//     {console.log("please enter proper number");}
//     return
//     return `${username} "is logged in"`
    
// }
// console.log(logInUser());
// let z=logInUser()
// console.log(z);

function shoppingCart(val1,val2,...num1) //REST OPERATOR USED TO PRINT INFInite values
{
    return num1
}
console.log(shoppingCart(400,300,500,600)) //Val1 and val2 is 200 and 300 respectively

const user={
    username:"kaustubh",
    price:400,
}
function handleObject(anyobject)
{
    console.log(`"the username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //object is passed in function
handleObject({   //object directly declared in function
    username:"kaustubh",
    price:400
})

const newArray=[200,566,344,677]

function array(oldarray)
{
    return oldarray[1]
}

console.log(array(newArray))  //array in function method1

 console.log(array([400,500.400]));  //array in a function method2



 //SCOPE
 //SCOPE MEANS {} EXCEPT FOR OBJECTS IN OBJECT CASE IT IS NOT SCOPE

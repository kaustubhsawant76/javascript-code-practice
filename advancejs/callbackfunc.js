// const calculate=(a,b,operation)=>{
//     return operation(a,b);
// };


// //method1
// const addition=calculate(3,4,function(num1,num2){
//     return num1+num2;
// });

// console.log(addition);

// //method 2
// const subtraction=(a,b)=>a-b;

// const subResult=calculate(8,3,subtraction);

// console.log(subResult);

// //method 3
// function multiply(a,b){
//     return a*b;
// }

// const mulResult=calculate(5,4,multiply)

// console.log(mulResult);

// //callback function is a function that is passed as an argument in another function the above examples show three methods of callback function


//the below is example of callback function 
// setTimeout(function(){
//     console.log("timer");
    
// },5000);

// function x(y){
//     console.log("x");
//     y();
//     }

//     x(function y(){
//         console.log("y");
//         });
//o/p will be x,y and then timer after 5sec

//Javascript is a synchronous and a single threaded language

//Blocking main  thread in javascript
//blocking main thread means you should not pass any haevy function in call stack to execute otherwise call stack stops other operations
//so for this purpose we use async javascript

//closures using event listners is shown below
function attachEventListner(){
    let count=0;
    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Button clicked",++count);
        
    });
}

attachEventListner();

//when eventlistners is not used it is removed with the help of remove event listner
//as event listners are heavy on memory of call stack 

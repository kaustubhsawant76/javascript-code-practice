// function init() {
//     let name = "Mozilla"; 
//     function displayName() {
//       let a=567;
//       function three(){
//         console.log(a);
//       }
//       three();
//       console.log(name); 
//     }
//     displayName();
    
//   }
//   init();
// LEXICAL SCOPING means if a function is made into another function the inner function can have acces to the values of the outer function
//in lexical scoping the outer function doesnot have access to the values of the inner function   
//if more inner functions are created those will have acces to the outer functions values



//CLOSURES
// function makeFunc() {
//   const name = "Mozilla";
//   function displayName() {
//     console.log(name);
//   }
//   return displayName;
// }

// const myFunc = makeFunc();
// myFunc();
//in above example not only the function display name is returned but its lexical scopr ias also returned

//CLOSURES Means when you are returning the function, not only the function is returned but its scope ie lexical scope is also returned 

//NORMAL WAY
// let a=document.getElementById("green")

// a.addEventListener('click',function(){
//     return document.body.style.backgroundColor="green"
// })

// let b=document.getElementById("orange")

// b.addEventListener('click',function(){
//     return document.body.style.backgroundColor="orange"
// })

//the below example show example of closures where inner function can access the outer function ie lexical scope
function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`

    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById('orange').onclick = clickHandler("orange")
document.getElementById('green').onclick = clickHandler("green")
//in the above example we are retuning a function which also returns lexical scope that is why inner color can acces outer function color
//if we do not make outer function the function gets directly  executed and we get change in color directly without clicking
//this is the best example for closures practical application

//USES of closures:-
//Module Design Pattern
//Currying
//Functions like once
//memoize
//maintaining state in async world
//setTimeouts
//Iterators
//and many more



//in the case below kaustubh sawant gets printed and it doesnot wait for setTimeout to execute
// function x(){
//     var i=1;
//     setTimeout(function(){
//         console.log(i);
//     },3000)
//     console.log("kaustubh sawant");
// }
// x();


// function x(){
//     for(let i=1;i<=5;i++){     //if we use var the output will be 6 as it points towards the same memory 
//     setTimeout( function(){
//         console.log(i);
//     },i*1000)

// }
    
// }
// x();


//the below is example by using var only
// function x(){
//     for(var i=1;i<=5;i++){ 
//         function close(i){      //due to closures new copy of i is formed 
//     setTimeout(function(){
//         console.log(i);
//     },i*1000)
// }
// close(i);

// }

    
// }
// x();

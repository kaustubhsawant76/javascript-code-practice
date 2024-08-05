//Accessing the function and variable before initialization is called hoisting
//in case of var the variable output will be undefined as before execution the  memory has been alloted to it with value undefined default
//in case of var function can be accesed before initialization and its console log will be function defination

getName();
console.log(getName);
console.log(x);

var x=7;



var func=function getName(){
    console.log("kaustubh sawant");
}//this function will be treated as a variable and output is undefined as it it declared in the variable

function getName(){
    console.log("kaustubh sawant");
} //only in these case output will come 

var getName=()=>{
    console.log("kaustubh sawant");
}
//arrow function will be treated as a variable and output is undefined


//this===window   on browser  this points towards window in browser


// console.log(this);  //in browser it is window object  in node enviornment or vs code it is {} empty object
//whenever you invoke a function a new execution context is created
//lexical envornment is the local memory along with the lexical enviornment of the parent
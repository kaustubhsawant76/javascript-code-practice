//falsy values:
//false,0,-0,"",Nan,null,undefined,bigint 0n

//TRUTHY VALUES
//"0",'false',{},[],function(){},"   "

//NULL COALESCING OPERATOR (??):FOR UNDEFINED AND NULL
// let var1=10??4
// let var1=null??4
let var1=undefined??4
console.log(var1);m
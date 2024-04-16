let a=400
if(true){
    let a=10
const b=20
var c=30
console.log(a);

}
//console.log(a);     //console log will not work out of the block scope  but if we want to print the valye then type console log in block scope
 //console.log(b);
 //console.log(c);  //var output comes in global scope even when it is declared in block scope that is why var is not used nowardays to prevent erroes
 //VARIABLES DECLARED IN BLOCE SCOPE AND GLOBAL SCOPE ARE DIFFERENT
console.log(a);

//GLOBAL SCOPE IS DIFFERENT IN NODE ENVIORN MENT AND BROWSER ENVIORNMENT

function one()
{
    let z="kaustubh"
    function two()
    {
        let x="sawant"
        console.log(z);
    }
    //console.log(x);
    two()
}
one()

//IF ELSE EXAMPLE

if (true)
{
    let name="kaustubh"
    if(name==="kaustubh")
    {
        let surname="sawant"
        console.log(name+surname);
    }
   // console.log(surname);
}
//console.log(name);

//++++++++++++++++++++function declaration++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(add(7)) //IN THIS TYPE OF DECLARATION FUNCTION CAN BE ACCESED BEFORE DECLARATION
function add(num)
{
    return 1+num
}


//IN THE BELOW TYPE OF FUNCTION DECLARATION ERROR COMES AS THE FUNCTION IS CALLED BEFORE ITS DECLARATION
add2(9)
const add2=function(num)
{
    return 2+num
}

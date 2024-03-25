let a= prompt("enter the age");
a=Number.parseInt(a);
console.log(typeof (a));
if(a>0)
{alert("this is a valid age")}
else
{
    alert("this is not a valid age")
}

//IF ELSEIF ELSEIF ELSE
let b=prompt("enter your age")
b=Number.parseInt(b);
if(b>0&&b<18)
{alert("you are a child and not allowed to drive")
}
else if(b>18&&b<20)
{
    alert("you are teen and allowed to drive but carefully")
}
else if(b>20&&b<60)
{alert("yor are mature and legally allowed to drive")}
else
{
    alert("you are senior citizen do not drive")
}

//TERNARY OPERATOR
let c=prompt("enter your agde")
console.log(c>18?"you can drive":"you cannot drive");
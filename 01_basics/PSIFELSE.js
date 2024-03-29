//PS1

// let age=prompt("enter your age")
// age=Number.parseInt(age)
// age>10&&age<20?"age lies in the range":"age doesnot lies in the range"

//PS2
let day ="monday"

switch(day)
{
case "monday":
        console.log("this is monday");
        break;
case "tuesday":
            console.log("this is tuesday");
            break;
case "wednesday":
                console.log("this is wednesday");
                break;
case "thursday":
                    console.log("this is thursday");
                    break;
case "friday":
                        console.log("this is friday");
                        break;
case "satday":
                            console.log("this is saturday");
                            break;
case "sunday":
                                console.log("this is sunday");
                                break;
}

//Q5
let age=prompt("enter your age")
age=Number.parseInt(age)
age>18?"you can drive legaly":"you cannot drive legally"

//PS3 
let num=prompt("enter the number")
num=Number.parseInt(num)
if(num%2==0&&num%3==0)
{
        console.log("the number is divisible by 2 and 3");
}
else
{
        console.log("the number is not divisible by 2 and 3");
}
//PS4
let number=prompt("enter the number")
number=Number.parseInt(number)
if(number%2==0 || number%3==0)
{console.log("the number is divisible by either 2 or 3");}
else
{
        console.log("the number is divisible by none");
}
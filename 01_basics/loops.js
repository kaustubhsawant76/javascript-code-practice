// for (i=0;i<10;i++)
// {
//     console.log(i);
// }
// //FOR LOOP ALWAYS PRINTS N-1

//PROGRAM TO ADD N NATUTAL NUMBERS
// let sum=0
// let n=prompt("enter the number")
// n=Number.parseInt(n)
// for(i=0;i<n;i++)
// {
//     sum+=(i+1)
// }
// console.log("the addition of"+ n +"natural  number is"+ sum);


// const obj=
// {
//     kaustubh:100,
//     vrushabh:200,
//     rajashree:400,
// }
// console.log(obj);

//FOR IN LOOP PRINT KEYS OF AN OBJECT IT CAM ALSO BE USED IN ARRAYS
// for(let a in obj)
// {console.log("the values for keys " + a+" are"+obj[a] );
// }


//FOR OF LOOP PRINTS ITERATION OF THE INPUT
// for(let b of "kaustubh")
// {
//     console.log(b);
// }

//console.log(i) will not come because the scope in i is only till curly braces



//WHILE LOOP

// let n=prompt("enter the number")
// n=Number.parseInt(n)
// let i=0;
// while(i<n)
// {
//     console.log(i);
//     i++;
// }

//DO WHILE
// let n=prompt("enter the number")
// n=Number.parseInt(n)

//IN DO WHILE LOOP FIRST CODE IS EXECUTED AND THEN CONDITION S CHECKED
// let i=10;

// do
// {
//     console.log(i);
//     i++;
// }
// while(i<10)

//CODE WITH HARRY PROBLEM SET
//PS2

// const obj=
// {
// harry:98,
// rohan:70,
// aakash:7,
// }
// for (let a in obj)
// {
//     console.log("the marks of the students "+a+"are "+obj[a]);
// }

//PS1
// const obj=
// {
// harry:98,
// rohan:70,
// aakash:7,
// }
// for (i=0;i<Object.keys(obj).length;i++)
// {
//     console.log("the marks of the students "+Object.keys(obj)[i]+" are "+ obj[Object.keys(obj)[i]]);
// }

// //ps3


// let cn=5;
// let i=0;
// while(i!=5)
// {
//    i=prompt("enter the number") 
// }
// console.log("the number is equal t0 5");


//PS4
// const mean=(a,b,c,d,e)=>
// {
//     return (a+b+c+d+e)/5
// }
// console.log(mean(10,10,10,10,10))






//CHAI AND CODE

// for (i=0;i<10;i++)
// {
//     console.log(`the value of outer loop is ${i}`);
//     for (j=0;j<10;j++)
//     {
//         // console.log(`the value of inner loop is ${j} and outer loop is ${i} `);
//         console.log(i+" * "+j+"="+i*j);
//     }
// }

//1-10 table //TWO LOOPS ARE REQUIRED INNER LOOP AND OUTER LOOP

// for (i=0;i<=10;i++)
// {
//     console.log(`the table for number ${i} is`);
//     for (j=0;j<=10;j++)
//     {
//         console.log(i+" * "+j+" = "+i*j);
//     }
// }

// let array=["kaustubh","vrushabh","rajashree"]
// console.log(array.length);
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     console.log(element);
    
// }



//BREAK AND CONTINUE
//THE PROGRAM WILL BE EXECUTED TILL BREAL THE ENTIRE LOOP IS NOT EXECUTED
//IN CONTINUE EXCEPT THE GIVEN CONDITION REST LOOP IS EXECUTED AND THE CONDITION IS ALSO EXECUTED

// for (let index = 1; index <=20; index++) {
//     if(index==5)
//     {
//        console.log("5 is detected")
//         // break
//         continue
//     }
//     console.log(`the number is ${index}`);
    
// }


//WHILE LOOP AND DO-WHILE LOOP

// let index=0;
// while(index<=10)
// {
//     console.log(`the value is ${index}`);
//     // index++;
//     index=index+2;
// }

let array=["kaustubh","vrushabh","rajashree"]
let i=0;
while(i<array.length) 
 
{
    console.log(`the value is ${array[i]}`);
    i++
}
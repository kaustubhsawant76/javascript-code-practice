
//FOR EACH LOOP LOOP IS EXECUTER FOR EACH ELEMENT
// let  arr=[4,5,3,7,8]


// arr.forEach((element)=>
// {
//     console.log(element*element);
// })
// //IN ARRAYS FOR OF LOOP WILL PRINT ALL ELEMENTS OF ARRAY AND IS SHOETCUT SO WE DONOT NEED TO WRITE THE WHOLE FOR LOOP
// for(let i of arr)
// {
//     console.log(i);
// }

// // FOR IN LOOP IN ARRAYS GIVE THE KEYS OF THE ARRAYS WHICH IS NOT VISIBLE 
// for(let j in arr)
// {
//     console.log(j);
// }

// //MAP METHOD RETURNS NEW ARRAY
// let d=[4,9,8,7,5,4]
// let e=d.map((value,index,array)=>
// {
//     console.log(value,index,array);
//     return value
// })
// console.log(e);

//FILTER FILTERS THE AND AND REURNS ATHE ARRAY ACCORDING TO GIVEN CONDITIONS
// let arr5=[1,2,3,4,5,6,7,8,9,10]
// let arr=arr5.filter((value)=>
// {
    
//     return value%2==0
// })
// console.log(arr);

// let arr=[1,2,3,4,5,6,7,8,9,10]
// const func=(h1,h2)=>
// {
//     return h1+h2
// }
// let arr1=arr.reduce(func)  //FUNCTION CAN BE PASSED AS A VARIABLE IN JAVASCRIPT
// console.log(arr1)

//CHAI AND CODE

//FOR OF LOOP

// const arr=[1,2,3,4,5,6]

// for(const val of arr)
// {
//     console.log(val);
// }


// //FOR OF USING STRINS
// const arr1="kaustubh"

// for(const val1 of arr1)
// {
//     console.log(`the output is ${val1}`);
// }


//MAP DATA TYPE
//MAP IS LIKE BASICALLY LIKE OBJECTS IE KEY VALUE PAIRS BUT UNIQUE DUBLICATES ARE NOT ALLOWED
//MAPDOESNOT ALOOW DUBLICATE VALUES
// const map1=new Map()
// map1.set("maharshtra","mumbai")
// map1.set("rajasthan","jaipur")
// map1.set("gujrat","ahmedabad")

// console.log(map1);

// for(let [key,value] of map1)
// {
//     console.log(key,"=",value);
// }


//FOR OF LOOP DOESNOTB WORKS ON OBJECT
//WHEN YOU OPEN SCOPE {} IT IS COMPULSARY TO WRITE RETURN INTO IT

let arr=[1,2,3,4,5,6,7,8,9,10]

let arr1=arr.map((element)=>{return element*10})  
           .map((element)=>{return element+1})
           .filter((element)=>{return element>40})   //CHAINING EXAMPLE
console.log(arr1);
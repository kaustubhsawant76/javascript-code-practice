// const student={
//     fullName:"kaustubh sawant",
//     marks:95.5,
//   marksprint: function (){
//  console.log("marks =",this.marks);
//   } ,  
// }

//this means in context of the object present
//whenever we create a object by deafault it gets a special property calles as prototype
//in prototype we get different methods which we can use


//the below is the example used on browser and pasted here
//the push method we get from prototype and we have used it
// let arr=["kaustubh","apple","banana"]
// undefined
// arr
// (3) ['kaustubh', 'apple', 'banana']0: "kaustubh"1: "apple"2: "banana"length: 3[[Prototype]]: Array(0)at: ƒ at()concat: ƒ concat()constructor: ƒ Array()copyWithin: ƒ copyWithin()entries: ƒ entries()every: ƒ every()fill: ƒ fill()filter: ƒ filter()find: ƒ find()findIndex: ƒ findIndex()findLast: ƒ findLast()findLastIndex: ƒ findLastIndex()flat: ƒ flat()length: 0name: "flat"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[Scopes]]: Scopes[0]flatMap: ƒ flatMap()forEach: ƒ forEach()includes: ƒ includes()indexOf: ƒ indexOf()join: ƒ join()keys: ƒ keys()lastIndexOf: ƒ lastIndexOf()length: 0map: ƒ map()pop: ƒ pop()push: ƒ push()reduce: ƒ reduce()reduceRight: ƒ reduceRight()reverse: ƒ reverse()shift: ƒ shift()slice: ƒ slice()some: ƒ some()sort: ƒ sort()splice: ƒ splice()toLocaleString: ƒ toLocaleString()toReversed: ƒ toReversed()toSorted: ƒ toSorted()toSpliced: ƒ toSpliced()toString: ƒ toString()unshift: ƒ unshift()values: ƒ values()with: ƒ with()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.unscopables): {at: true, copyWithin: true, entries: true, fill: true, find: true, …}[[Prototype]]: Object
// arr.push("sawant")
// 4
// arr
// (4) ['kaustubh', 'apple', 'banana', 'sawant']





//example of proto
// const employee={
//   calcTax(){
//     console.log("tax rate is 10%");
//   },
// }

// const karanArjun={
//   salary:50000,
// }

// karanArjun.__proto__=employee; //in this property of employee will go in prototype of karanArjun
// karanArjun.calcTax()//and now tou can acces this property if sane calcTax is declared in karanArjun then it will acces karanArjun function


//CLASSES
//classes are used when multiple objects having same properties are to be defined

// class ToyotaCar{
//   constructor(brand){  //this function is used to initialize the new object when new keyword is called 
//     console.log("creating new object");
//     this.brand=brand;
    //if we donot put constructor then javascript by dafault puts it
//   }
//   start(){
//     console.log("start");
//     }
//     stop(){
//       console.log("start");
//       }

//        setBrandName(brand){
//         this.brand=brand; //this refers to the new object that will be created
//        }
// }

// let fortuner=new ToyotaCar("bentley");//the properties of ToyotaCar can be accesable by many objects without creating it repetadedly that is why classes are useful
// fortuner.setBrandName("fortuner")
// let lexus=new ToyotaCar();
// let audi=new ToyotaCar();
//  audi.setBrandName("audi");


//INHERITANCE

class Person{
  eat(){
    console.log("eat");  
  }

  eat(){
    console.log("eat");  
  }

  eat(){
    console.log("eat");  
  }

  work(){
    console.log("do nothing");  //child class will be invoked not parent class
    
  }
}


class Engineer extends Person{   //extends inhereit properties from parent to children
  work(){
    console.log("solve problems,build something");
    
  }
}

class Doctor extends Person{
  work(){
    console.log("treat patients");
    
  }
}

let kaustubhObj=new Engineer();

let  kaustubhObj1=new Person();
//if parent and child has the same property child property will be inherited this is known as method overriding
//if we have inherited class and have constructor in parent as well as child so in child class we need super() to invoke parent class constructor




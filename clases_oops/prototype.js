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


//CHAI AND CODE PROTOTYPE

// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.kaustubh = function(){
    console.log(`kaustubh is present in all objects`);
}

Array.prototype.heyKaustubh = function(){
    console.log(`Kaustubh says hello`);
}

// heroPower.kaustubh()
// myHeros.kaustubh()
// myHeros.heyKaustubh()
// heroPower.heyKaustubh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
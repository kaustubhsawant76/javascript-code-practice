let a=new Number(123.567)

console.log(a.toString().length);
console.log(typeof (a))
console.log(a.toFixed(2));
let  b=123.567
console.log(b.toPrecision(3));
let c=10000000
console.log(c.toLocaleString('en-in'));


//MATHS
console.log(Math.abs(-5));
console.log(Math.ceil(4.2));
console.log(Math.floor(4.8));
console.log(Math.round(4.6));
console.log(Math.round(4.4));
console.log(Math.min(4,6,2,7));
console.log(Math.max(1,4,9,5,3));
//Math.random value is always between 0 and 1
console.log((Math.random()*10)+1);
console.log((Math.random()*10)+1);

const min=10;
const max=20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
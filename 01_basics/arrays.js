let marks=[70,90,56,false,"kaustubh"]
console.log(marks);
console.log(marks[0]);
console.log(marks[1]);
console.log(marks[2]);
console.log(marks[3]);
console.log(marks[4]);
console.log(marks[5]);
console.log(marks[6]);
marks[6]="vrushabh"
console.log(marks[6]);

console.log(marks.length);
// console.log(marks.join("/"));
// marks=marks.toString()
// console.log(typeof (marks));
// console.log(marks);
console.log(marks);
marks.pop()
console.log(marks);
marks.push(78)
console.log(marks);
marks.shift()
console.log(marks);
marks.unshift("kaustubh")
console.log(marks);


console.log(marks);


delete marks[0]
console.log(marks);


let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]
let a4=a1.concat(a2,a3)
console.log(a4);
let a5=[8,1,6,9,4]
a5.sort()
console.log(a5);

//SPREAD OPERATOR ...
let b1=[2,4,7,8]
let b2=[6,7,9,4]
let b3=[...b1,...b2]
console.log(b3);

let c1=[1,2,[3,4],5,[3,6],7]
let c2=c1.flat(3)
console.log(c2)

console.log(Array.isArray("kaustubh"))
console.log(Array.from('vrushabh'));

let d1=100
let d2=200
let d3=799
console.log(Array.of(d1,d2,d3));

console.log(Array.from({id:"kaustubh"}));



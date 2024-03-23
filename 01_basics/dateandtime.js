let myDate=new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toLocaleDateString());


let a = new Date(2023,0,12)
console.log(a);
console.log(a.toDateString());

let c=Date.now()
console.log(c);
console.log(myDate.getTime());

console.log(Math.floor(Date.now()/1000));

let d=new Date()
console.log(d.getMonth()+1);
console.log(d.getDay());
d.toLocaleString('default',{
    weekday:"long"
})
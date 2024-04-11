//CODE WITH HARRY
// const object=
// {
//     kaustubh:25,
//     vrushabh:"sawant",
//     boolean:true,
// }
// console.log(object);

// console.log(object['vrushabh']);
// object['rajashree']="sawant"
// console.log(object);


//CHAI AND CODE JAVSCROPT

//SINGLETON=THROUGH CONSTRUCTOR
//Cbject.create


//OBJECT LITERALS
//INTERVIEW IMPORTANT HOW TO ADD SYMBOL IN OBJECT=USING SIMPLE[] BRACKETS IN KEY SIDE
const mySymb=Symbol("kaustubh")
const object=
{
  marks:100,
  email:"kaustubh@gmail.con",
  [mySymb]:'vrushabh',
  kaustubh:"sawant",

}
console.log(object.marks);
console.log(object['email']);
// console.log(typeof object["symb"]);
console.log(object[mySymb]);
console.log(typeof object[mySymb]);

object.kaustubh="svis"
object['email']="vrushabh.swant"
console.log(object);

//ONCE YOU FREEZE THE OBJECT YOU CANNOT CHANGE THE VALUES
//Object.freeze(object)
object['email']="kfbwkfbwnwflfwlb"
console.log(object["email"]);
object.greeting=function()
{
  console.log("my name is kaustubh");
}
console.log(object.greeting());
object.greetingTwo=function()
{
  console.log(`my name is ${this.email}`);
}
console.log(object.greetingTwo());

//0BJECTS PART 2

//const flipkart=new Object()  //SINGLETON OBJECT

const obj={}
obj.name="kaustubh"
obj.email="kaustubhsawant76@gmail.com"
obj.isLoggedIn=true

console.log(obj);
//NESTING OF OBJECTS // DECLARING OBJECT IN A OBJECT
const regularUser=
{
  email1:"kaustubh@gmail.com",
  fullName:
  {
    name1:"kaustubh",
    location:
    {
      city:"mumbai",
      state:"maharashtra",

    }
  }
}
console.log(regularUser);
console.log(regularUser.fullName);
console.log(regularUser.fullName.location);
console.log(regularUser.fullName.location.city);

//THE BELOW IS OPTIONAL CHAINING MEANS ? WILL CHECK WEATHER THE TERM IS IN THE OBJECT OR NOT IF NOT THEN TOO THE PROGRAM WILL EXECUTE
//console.log(regularUser,fullName?.location.city);

const obj2={1:"a",2:"b",3:"c"}
const obj3={4:"a",5:"b",6:"c"}
const obj4={7:"a",8:"b",9:"c"}
//CONCATINATION CAN BE DONE WITH THE HELP OF OBJECT.ASSIGN
//const obj5=Object.assign({},obj2,obj3,obj4)
//console.log(obj5);

//CONCATINATION CAN BE ALSO DONE WITH THE HELPOF SPREAD OPERATOR ()....)
const obj6={...obj2,...obj3,...obj4}
console.log(obj6);

//you will  get values from databese in the form of arrays and contains many objects insite it
const dbobj=[
  {
    id:1,
    email:"kaustubh@gmail.com",
  },
  {
    id:2,
    email:"kaustubh@gmail.com",
  },
  {
    id:3,
    email:"kaustubh@gmail.com",
  },
]
console.log(dbobj[1].email);
console.log(object);
console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));

//hasOwnPropert() method is used to check whether the property exist in the object or not this can prevent error
console.log(object.hasOwnProperty('kaustubh'));

//DESTRUCTURING OF OBJECT IS USED TO ACCES ANY PROPERTY OF AN OBJECT IN A EASY MAANER

const {kaustubh}=object
console.log(kaustubh);
const {kaustubh:k}=object
console.log(k);


//JSON STRUCTUTRE in {} and keys and values both are in string format
{
  "id":"as",
  "name":"kaustubh",
  "location":"mumbai"

}

//JSON CAN ALSO BE IN ARRAY OBJECT FORMAR AS BELOW=
[
  {},
  {},
  {},
]
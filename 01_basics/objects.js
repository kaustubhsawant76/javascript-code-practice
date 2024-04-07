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


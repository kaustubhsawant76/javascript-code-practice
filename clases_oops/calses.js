
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




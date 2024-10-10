
//MAP FILTER AND REDUCE 

const arr=[5,1,3,2,6];

const arr2=arr.map((cab) => {
    return cab*2;
})

console.log(arr2); //[ 10, 2, 6, 4, 12 ]

const arr3=arr.map((cab) => {
    return cab*3;
})

console.log(arr3); //[15,3,9,6,19]

const arr4=arr.map((cab) => {
    return cab.toString(2);    //convert to binary
})

console.log(arr4);


//CALLBACK HELL
//Inversion of control

const cart=["shoes","pant","kurta"];


api.createOrder(cart,function(){

api.proceedToPayment(function () {

api.showOrderSummary(function (){
    api.updateWllet()
})
})
})

//the above shows exampleof callback hell one callback into another callback and this goes on
//this structure is also known as pyramid of DOOM


//Inversion of control is we lose control over the application
//promise is nothing but an empty object with initaially assigned undefined it will be assigned value after promise execution
//using promise we can prevent inversion of control
 

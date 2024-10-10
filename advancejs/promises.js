// const cart=["shoes","pant","kurta"];


// api.createOrder(cart,function(orderId){  //passing callback function to an another function
// //we donot have control over program
// api.proceedToPayment(orderId);

// });


// const promise=createOrder(cart);

// promise.then(function(orderId){      //attaching callback function to a promise object
// //we have the control
//     api.proceedToPayment(orderId);
    
//     });

const api="https://api.github.com/users/kaustubhsawant76"

const user=fetch(api);

console.log(user);   //we get a promise

user.then(function (data) {
    console.log(data);
    
})

//promise definations
//1-promise is a placeholder initially with empty value then filled withb some value afterwards
//2-a container for future value



//CONSUMING A PROMISE

const cart=["shoes","pants","kurta"];

const promise=createOrder(cart);// orderid

promise.then(function (orderId) {
    console.log(orderId);
    
    //proceedToPayment(orderId);
});


//Creating a promise

function createOrder(cart) {
 const pr= new Promise(function (resolve,reject) {
//createOrder
//validateCart
//orderId
if(!validateCart(cart)){
    const err=new Error("Cart is not valid")
    reject(err);
    
}
//logic for create order
const orderId="12345";
if (orderId){
   setTimeout( function () {resolve(orderId)},5000);
}
 
 } 


)
return pr;
}

function validateCart(cart){
    return true;
}


//always write code to handle errors

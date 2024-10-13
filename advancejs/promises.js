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

//const promise=createOrder(cart);// orderid

//promise

//the above thing can be also written as below:-

createOrder(cart).then(function (orderId) {
    console.log(orderId);
    
    //proceedToPayment(orderId);
})

.then(function () {
    proceedToPayment(orderId);  
})

.catch(function (err) {
console.log(err.message);

});


//when consuming a promise always write catch statement for error handling gracefully

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


function proceedToPayment(orderId) {
    return new Promise(function (resolve,reject) {
        resolve("Payment Succesfull")
    })
}

function validateCart(cart){
    return false;
}


//if you write .catch before any then method in chainning the then method will be executed 
//always write code to handle errors

//PROMISE API's
//promise apis are used to make parralel api call

//there are mainly 4 promise api's
//1-Promise.all() = for making parallel api calls
//2-Promise.allSettled()   =
//3-Promise.race()
//4-Promise.any()


//promise.all takes array of promises it returns result time is only ehen all promisesare fulfilled
//if any single error is there in promise.all then the entire promise.all will fail
//if a single error is detected it will show error at that time
//other promises will be executed accept failure ione
//-Promise.allSettled()  same as promise.all except it waits for all promised to be settled and returns passedn as well as failure promise
//Promise.race() will execute the least time taking promises that is there is race which promise comes first even there is error it will come first
//Promise.any() will execute the least time taking promises that is there is race which promise comes first  same as Promise.race()  only difference is it waits for succesful promise not error one
//Promise.any() if all promises fail then the result will be an agrregated error ie average error


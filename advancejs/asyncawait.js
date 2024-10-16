//asyc function always returns a promise
//async and await are used to handle promises
//in async await the js engine waits for the promise to rwesolve
//

// 💡 async function always returns a promise, even if I return a simple string from below function, async keyword will wrap it under Promise and then return.
async function getData() {
    return "Namaste JavaScript";
  }
  const dataPromise = getData();
  console.log(dataPromise); // Promise {<fulfilled>: 'Namaste JavaScript'}
  
  //❓How to extract data from above promise? One way is using promise .then
  dataPromise.then(res => console.log(res)); // Namaste JavaScript




  const p = new Promise((resolve, reject) => {
    resolve('Promise resolved value!!');
  })
  
  async function getData() {
    return p;
  }
  // In above case, since we are already returning a promise async function would simply return that instead of wrapping with a new Promise.
  //const dataPromise = getData();
  console.log(dataPromise); // Promise {<fulfilled>: 'Promise resolved value!!'}
  dataPromise.then(res => console.log(res)); // Promise resolved value!!


 // const p = new Promise((resolve, reject) => {
    resolve('Promise resolved value!!');
  //})
  
  function getData() {
    p.then(res => console.log(res));
  }
  
  getData(); // Promise resolved value!!
  
  //📌 Till now we have been using Promise.then/.catch to handle promise.
  // Now let's see how async await can help us and how it is different
  
  // The rule is we have to use keyword await in front of promise.
  async function handlePromise() {
    const val = await p;
    console.log(val);
  }
  handlePromise(); // Promise resolved value!!
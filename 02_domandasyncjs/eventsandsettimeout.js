// let a=setTimeout(() => {
//     console.log("kaustubh sawant");
// }, 5000)

// console.log(a);
// clearTimeout(a) //stops the setTimeout and after 5sec nothing will be displayed

//after 5000ms ie 5sec kaustubh sawant will be printed on console and only once
//in console log some number appears that is the timer id

// let b=setInterval(() => {
//     console.log("kaustubh sawant");
// }, 2000)
// console.log(b);

// clearInterval(b);//stops the execution of set interval

//after 2000ms ie 2sec kaustubh sawant will be printed and continously after 2sec


//Mouse events:
//click	onclick	When mouse click on an element
//mouseover	onmouseover	When the cursor of the mouse comes over the element
//mouseout	onmouseout	When the cursor of the mouse leaves an element
//mousedown	onmousedown	When the mouse button is pressed over the element
//mouseup	onmouseup	When the mouse button is released over the element
//mousemove	onmousemove	When the mouse movement takes place.


//Keyboard events:
//Keydown & Keyup	onkeydown & onkeyup	When the user press and then release the key


//Form events:
//focus	onfocus	When the user focuses on an element
//submit	onsubmit	When the user submits the form
//blur	onblur	When the focus is away from a form element
//change	onchange	When the user modifies or changes the value of a form element


//Window/Document events
//load	onload	When the browser finishes the loading of the page
//unload	onunload	When the visitor leaves the current webpage, the browser unloads it
//resize	onresize	When the visitor resizes the window of the browser

const imgList=document.getElementById('images');
const img=document.getElementById('owl');
const button1=document.getElementById('btn1');

const button=document.getElementById('btn');

button.addEventListener('click',function(e){
    alert('button clicked');
})

button1.addEventListener('click',function(e){
    alert('button  1 is clicked');
})


imgList.addEventListener('click',function(e){  
    console.log('images are clicked');
},false)         //false means event bubbling takes place down to up and if true event capturing takes place ie up to down

img.addEventListener('click',function(e){   //this is an example of event bubling ie event bubbles up 
    console.log('owl is clicked');
    e.stopPropagation(); //stops event propagation 
},false)    //the default value is false

//Event propagation means how event execution takes place
//there are two types of event propagation 1)event bubling 2)event capturing  both are explained in the above example of images





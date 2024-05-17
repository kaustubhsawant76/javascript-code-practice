//CODE WITH HARRY

//CHILDREN
console.log(document.body.firstChild);//gives first element it can also be a text
console.log(document.body.lastChild);//gives last element it can also be a text
console.log(document.body.childNodes);//gives all childnodes

console.log(document.body.childNodes[0]);  /// as same as console.log(document.body.firstChild);
console.log(document.body.childNodes[document.body.childNodes.length-1]);// ===as same as console.log(document.body.lastChild);


console.log(document.body.firstElementChild);//gives first element it doesnot gives a text
console.log(document.body.lastElementChild);//gives last element it doesnot gives a text

//SIBLINGS
$0  //BY FIRST MOUSE CLICKING ON AN ELEMENT AND THEN TYPING$0 IN CONSOLE WILL RETURN THAT ELEMENT IN OUTPUT
$1//IT RETURNS THE PREVIOUS ELEMENT OF $0
document.head.nextSibling //it gives output body as html has 2 children head and body and both are sibling simultaneously
document.body.previousSibling //it gives output head as html has 2 children head and body and both are sibling simultaneously
document.head.nextElementSibling//it doesnot include text or comment nodes
document.body.previousElementSibling//it doesnot include text or comment nodes

document.body.childNodes[2].nextElementSibling //another way to acces siblings

//PARENT 
a=document.body.firstChild //put in a variable
a.parentNode //get the parent node which is body or a text or comment node
a.parentElement //it only gives parent element not the nodes



//CODE WITH HARRY
console.log(document.body.firstChild);//gives first element it can also be a text
console.log(document.body.lastChild);//gives last element it can also be a text
console.log(document.body.childNodes);//gives all childnodes

console.log(document.body.childNodes[0]);  /// as same as console.log(document.body.firstChild);
console.log(document.body.childNodes[document.body.childNodes.length-1]);// ===as same as console.log(document.body.lastChild);


console.log(document.body.firstElementChild);//gives first element it doesnot gives a text
console.log(document.body.lastElementChild);//gives last element it doesnot gives a text


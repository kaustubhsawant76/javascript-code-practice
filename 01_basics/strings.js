let a="kaustubh"
console.log(a)
console.log(a.length)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
console.log(a[5])
console.log(a[6])
console.log(a[7])
//STRINGS CAN ALSO BE WRITTEN IN '' single quotes
//STRING LITERALS
let b="kaustubh"
let c="sawant"
console.log(`${b} surname is ${c}`)
//STRING METHODS
let d="kaustubh sawant"
console.log(d.length)
console.log(d.toUpperCase())
console.log(d.toLowerCase())
console.log(d.trim())
console.log(d.slice(10,14))
console.log(d.slice(2))
let e="kaustubh"
console.log(e.slice(2,7))
console.log(e.replace("kaustubh","sawant"))
console.log(e)
console.log(e.concat(d,"babaji"))

//PROBLEM SET 
//1
let f="hat\""
console.log(f.length)
console.log(f.toUpperCase())
f[1]="e" //STRING DOESNOT CHANGES NEITHER THROWS ERROR BEACAUSE STRINGS ARE IMMUTABLE

let g="please give rs 1000"
console.log(g.length)
console.log(g.slice(15))

let h="my name is kaustubh "
let i="sawant"
console.log(`the word ${i} ${h.includes("sawant")?"is":"is not"} in the sentence`)
//includes  checks whethether any word is or is not there in the sentence and returnes true and false values
console.log(h.charAt(4))
console.log(h.indexOf('s'));
console.log(h.substring(0,5));
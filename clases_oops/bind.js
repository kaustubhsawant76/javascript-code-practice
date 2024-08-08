const person = {
    name: 'Alice',
    greet: function() {
        console.log('Hello, my name is ' + this.name);
    }
};

const greet = person.greet;
greet(); // Outputs: Hello, my name is undefined (or throws an error in strict mode)

const boundGreet = person.greet.bind(person);
boundGreet(); // Outputs: Hello, my name is Alice

//Explanation
//Original Method: person.greet is a method that uses this to refer to the person object.
//Detached Method: When greet is called as a standalone function, this no longer refers to the person object, leading to undefined or an error.
//Bind Method: person.greet.bind(person) creates a new function, boundGreet, where this is always bound to person, ensuring the correct context.
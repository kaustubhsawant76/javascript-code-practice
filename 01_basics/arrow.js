const object =
{
    username:"kaustubh",
    price:999,

    logInUser: function() //new way to declare function inside object
    {
        console.log(`${this.username},welcome to the website`);
        console.log(this);
    }
}
object.logInUser()

console.log(this);

//THE VALIUE OF CONSOLE.LOG  IN VS CODE AND NODE.JS ENVIORNMENT IS {} THAT IS EMPTY OBJECT AND THE VALUE IN BROWSER IS WINDOW WHERE WE CAN ACCES VARIOUS PARAMETERS
//this only works in object not in function

// function user()
// {
//     let user1="kaustubh"
//     console.log(this.user); //this doenot work in function
// }
// user()
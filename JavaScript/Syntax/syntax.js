// single-line comment
/*
Comment with multiple lines
*/


//assertions
//assert.equal(7 + 1, 8)
//it means 7 + 1 = 8

// Printing a value to standard out (another method call)
// console.log('Hello');

// Printing error information to standard error
// console.error('Something went wrong!');

/*We operators for:
    1. Booleans
    2. numbers
    3. bigints
    5. string
    6. comparison operators
*/

//ORDINARY FUNCTION DECLARATIONS--------

//add1() has the parameters a and b
function add1(a, b)
{
    return a + b;
}

//calling function add1()
assert.equal(add1(5,2), 7);


//ARROW FUNCTION EXPRESSIONS--------
//arrow function expressions are used especially as arguments of function calls and method calls.
const add2 = (a,b) => { return a + b};
//calling function add2()
assert.equal(add2(5,2), 7);

//Equivalent to add2:
const add3 = (a,b) => a + b;


//PLAIN OBJECTS-----
/*creating an object in JavaScript is actually quite different from Java.
the didnt need to create a class? interesting...*/
//but JavaScript still uses semicolon la ;

//creating a plain object via an object literal.
const obj = {
    first: 'Jane',  //property
    second: 'Doe',  //property
    getFullName() { //property (method)
        return this.first + ' ' + this.last;
    },
};

//getting a property value
assert.equal(obj.first, 'Jane');
//setting a property value
obj.first='Janey';
//calling the method name
assert.equal(obj.getFullName(), 'Janey Doe');
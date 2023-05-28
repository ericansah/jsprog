//import {message} from "./js/message.js";

//JS CSS
const container1Style = document.querySelector(".container")
container1Style.style.textAlign = "center";


//JS single line comment

/*
Jacascript
multi line
comment
*/


//Variables: Containers (x, y) for storing data (storing data values).

var tutVar1 = 15;
var tutVar2 = 15;
var tutVar3 = tutVar1 + tutVar2;


document.querySelector(".my-var-text-1").innerHTML = tutVar3;


let tutVar4 = 5;
let tutVar5 = 6;
let tutVar6 = tutVar4 + tutVar5;


document.querySelector(".my-var-text-2").innerHTML = tutVar6;


var tutVar7 = 100;
var tutVar8 = 8;
var tutVar9 = tutVar7 + tutVar8;


document.querySelector(".my-var-text-3").innerHTML = tutVar9;


const price1 = 5;
const price2 = 20;
let total1 = price1 + price2;


document.querySelector(".my-var-text-4").innerHTML = "£" + total1;


const price3 = 5;
const price4 = 20;
var total2 = price3 + price4;


document.querySelector(".my-var-text-5").innerHTML = "£" + total2;


const pi = 3.14;
let personName1 = "John Doe";
let answer = 'Yes I am!';

document.querySelector(".my-var-text-6").innerHTML =
    pi + "<br>" + personName1 + "<br>" + answer;



let personName2 = "John Doe", carName1 = "Volvo", price = 200;
document.querySelector(".my-var-text-7").innerHTML = carName1;


let personName3 = "John Doe",
    carName2 = "Volvo",
    cost1 = 250;
document.querySelector(".my-var-text-8").innerHTML = cost1;


let carName3;
document.querySelector(".my-var-text-9").innerHTML = carName3;



let $$$ = 2;
let $myMoney = 5;
document.querySelector(".my-var-text-10").innerHTML = $$$ + $myMoney;


let _x = 2;
let _100 = 5;
document.querySelector(".my-var-text-11").innerHTML = _x + _100;


//Var and let variable decleration


var tutVar10 = 10;
// Here tutVar10 is 10

document.querySelector(".my-var-text-12").innerHTML = tutVar10;

{
    var tutVar10 = 2;
    // Here tutVar10 is 2
}

//Here tutVar output10 is 2
document.querySelector(".my-var-text-13").innerHTML = tutVar10;


//Using let


let tutVar11 = 10;
// Here x is 10
document.querySelector(".my-var-text-14").innerHTML = tutVar11;

{
    let tutVar11 = 2;
    document.querySelector(".my-var-text-15").innerHTML = tutVar11;
    // Here x is 2
}

document.querySelector(".my-var-text-16").innerHTML = tutVar11;
// Here x is 10


//Redeclaring a JavaScript variable with var is allowed anywhere in a program:


var tutVar12 = 2;
// Now tutvar12 is 2

var tutVar12 = 3;
// Now tutVar12 is 3

document.querySelector(".my-var-text-17").innerHTML = tutVar12;


//With let, redeclaring a variable in the same block is NOT allowed:
//Example

/*var x = 2;   // Allowed
let x = 3;   // Not allowed

{
let x = 2;   // Allowed
let x = 3;   // Not allowed
}

{
let x = 2;   // Allowed
var x = 3;   // Not allowed
}*/


//Redeclaring a variable with let, in another scope, or in another block, is allowed:


let tutVar13 = 1000;   // Allowed
document.querySelector(".my-var-text-18").innerHTML = tutVar13;

{
    let tutVar13 = 2000;   // Allowed
    document.querySelector(".my-var-text-19").innerHTML = tutVar13;
}

{
    let tutVar13 = 3000;   // Allowed
    document.querySelector(".my-var-text-20").innerHTML = tutVar13;
}

//tutVar13 is 1000
document.querySelector(".my-var-text-21").innerHTML = tutVar13;

/*JS Hoisting

Variables defined with var are hoisted to the top and can be initialized at any time.
Meaning: You can use the variable before it is declared:
*/

carNameBrand1 = "Lambo";
document.querySelector(".my-var-text-22").innerHTML = carNameBrand1;
var carNameBrand1;

/*
Variables defined with let are also hoisted to the top of the block, but not initialized.
Meaning: Using a let variable before it is declared will result in a ReferenceError.
*/

try {
    carName = "Saab";
    let carName = "Volvo";
}
catch (err) {
    document.querySelector(".my-var-text-23").innerHTML = err;
}


//Using const

/*
Variables defined with const cannot be Redeclared.

Variables defined with const cannot be Reassigned.

Variables defined with const have Block Scope.
*/
try {
    const PI = 3.141592653589793;
    PI = 3.14;      // This will give an error
    PI = PI + 10;   // This will also give an error
}
catch (err) {
    document.querySelector(".my-var-text-24").innerHTML = err;
}

const number1PI = 3.14159265359; //coirrect
document.querySelector(".my-var-text-25").innerHTML = number1PI;

//incorrect
try {
    const number2PI = "";
    number2PI = 3.14159265359;
}
catch (err) {
    document.querySelector(".my-var-text-26").innerHTML = err;
}


/**
 When to use JavaScript const?
Always declare a variable with const when you know that the value should not be changed.

Use const when you declare:

A new Array
A new Object
A new Function
A new RegExp
Constant Objects and Arrays
The keyword const is a little misleading.

It does not define a constant value. It defines a constant reference to a value.

Because of this you can NOT:

Reassign a constant value
Reassign a constant array
Reassign a constant object
But you CAN:

Change the elements of constant array
Change the properties of constant object
 */


/**
Constant Arrays
You can change the elements of a constant array:
 */

// Create an Array:
const carsArray = ["Saab", "Volvo", "BMW"];

// Change an element:
carsArray[0] = "Toyota";

// Add an element:
carsArray.push("Audi");

// Display the Array:
document.querySelector(".my-var-text-27").innerHTML = carsArray;


/*
Constant Objects
You can change the properties of a constant object:
 */

// Create an object:
const carObj1 = { type: "Fiat", model: "500", color: "white" };

//Display object
document.querySelector(".my-var-text-28").innerHTML = carObj1;


// Change a property:
carObj1.color = "red";

// Add a property:
carObj1.owner = "Johnson";

// Display object with change of property value and additional property and value pair:
document.querySelector(".my-var-text-29").innerHTML = carObj1;

document.querySelector(".my-var-text-30").innerHTML = "Car owner is " + carObj1.owner;

document.querySelector(".my-var-text-31").innerHTML = "Car color is " + carObj1.color;


//You can NOT reassign a constant object:
try {
    const carObj2 = { type: "Fiat", model: "500", color: "white" };
    carObj2 = { type: "Volvo", model: "EX60", color: "red" };
}
catch (err) {
    document.querySelector(".my-var-text-32").innerHTML = err;
}


/*Block Scope
Declaring a variable with const is similar to let when it comes to Block Scope.

The x declared in the block, in this example, is not the same as the x declared outside the block
*/


const tutVar14 = 10;
// Here is 10

{
    const tutVar14 = 2;
    document.querySelector(".my-var-text-34").innerHTML = tutVar14;
    // Here is 2
}

// Here is 10
document.querySelector(".my-var-text-33").innerHTML = tutVar14;


/*
Variables defined with const are also hoisted to the top, but not initialized.

Meaning: Using a const variable before it is declared will result in a ReferenceError:
 */

try {
    alert(carNameBrand2);
    const carNameBrand2 = "Volvo";
}
catch (err) {
    document.querySelector(".my-var-text-35").innerHTML = err;
}


//Operators

/*
The Addition Operator + adds numbers:

The Assignment Operator = assigns a value to a variable.

The Multiplication Operator (*) multiplies numbers:

The subtraction operator (-) subtracts numbers.

The division operator (/) divides numbers.

The modulus operator (%) returns the division remainder.

The increment operator (++) increments numbers.

The decrement operator (--) decrements numbers.

The exponentiation operator (**) raises the first operand to the power of the second operand.
*/


//Arithmetic Operators are used to perform arithmetic on numbers:

let arithmeticVar = 3;
let arithmeticValue = (80 + 20) * arithmeticVar;
document.querySelector(".my-var-text-36").innerHTML = arithmeticValue;




//The Addition Assignment Operator (+=) adds a value to a variable.

//
var tutVar15 = 10;

//add 5 to the existing value of 10, and assign new value of 15 to the variable.

/*
Operator	Example	Same As
=	x = y	x = y
+=	x += y	x = x + y
-=	x -= y	x = x - y
*=	x *= y	x = x * y
/=	x /= y	x = x / y
%=	x %= y	x = x % y
**=	x **= y	x = x ** y
 */

tutVar15 += 5;

//Output 15
document.querySelector(".my-var-text-37").innerHTML = tutVar15;


/*Comparison Operators

Operator	Description
==	equal to
===	equal value and equal type
!=	not equal
!==	not equal value or not equal type
>	greater than
<	less than
>=	greater than or equal to
<=	less than or equal to
?	ternary operator


JavaScript String Comparison
All the comparison operators above can also be used on strings:
*/

let text1 = "A"; //ASCII CODE 065
let text2 = "Z"; //ASCII CODE 090
let result1 = text1 < text2;
document.querySelector(".my-var-text-38").innerHTML = "Is A less than Z? " + result1;


let text3 = "a"; //ASCII CODE 097
let text4 = "z"; //ASCII CODE 122
let result2 = text3 < text4;
document.querySelector(".my-var-text-39").innerHTML = "Is a less than z? " + result2;


let text5 = "a"; //ASCII CODE 097
let text6 = "A"; //ASCII CODE 065
let result3 = text5 < text6;
document.querySelector(".my-var-text-40").innerHTML = "Is a less than A? " + result3;


let text7 = "z"; //ASCII CODE 122
let text8 = "Z"; //ASCII CODE 090
let result4 = text7 < text8;
document.querySelector(".my-var-text-41").innerHTML = "Is z less than Z? " + result4;


//strings are compared alphabetically:

let text9 = "20";
let text10 = "5";
let result5 = text9 < text10;
document.querySelector(".my-var-text-42").innerHTML = "Is 20 less than 5? " + result5;


/*
JavaScript String Addition

The + can also be used to add (concatenate) strings:
*/


let text11 = "John";
let text12 = "Doe";
let text13 = text11 + " " + text12;

document.querySelector(".my-var-text-43").innerHTML = text13;

//The addition assignment operator += can concatenate strings.

let text14 = "What a very ";
text14 += "nice day";
document.querySelector(".my-var-text-44").innerHTML = text14;


/*
Adding Strings and Numbers
Adding two numbers, will return the sum, but adding a number and a string will return a string:
*/

let text15 = 5 + 5;
let text16 = "5" + 5;
let text17 = "Hello" + 5;
document.querySelector(".my-var-text-45").innerHTML =
    text15 + "<br>" + text16 + "<br>" + text17;


/*

Arithmetic Operators

Arithmetic operators perform arithmetic on numbers (literals or variables).

Operator	Description
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Remainder)
++	Increment
--	Decrement

Arithmetic Operations
A typical arithmetic operation operates on two numbers.

The two numbers can be literals:

*/

//Literal numbers

let text18 = 100 + 50;
document.querySelector(".my-var-text-46").innerHTML = text18;

//Variables

let text19 = 100;
let text20 = 50;
let text21 = text19 + text20;
document.querySelector(".my-var-text-47").innerHTML = text21;


//Expressions

let text22 = 3;
let text23 = (100 + 50) * text22;
document.querySelector(".my-var-text-48").innerHTML = text23;


/**
Operator Precedence

Operator precedence describes the order in which operations are performed in an arithmetic expression.

Multiplication (*) and division (/) have higher precedence than addition (+) and subtraction (-).

When using parentheses, the operations inside the parentheses are computed first:
 */

/*
Assignment Operators

Assignment operators assign values to JavaScript variables.


The = Operator
The Simple Assignment Operator assigns a value to a variable.

let x = 10;
let x = 10 + y;

The += Operator
The Addition Assignment Operator adds a value to a variable.

let x = 10;
x += 5;
let text = "Hello"; 
text += " World";


The -= Operator
The Subtraction Assignment Operator subtracts a value from a variable.

let x = 10;
x -= 5;


The *= Operator
The Multiplication Assignment Operator multiplies a variable.

let x = 10;
x *= 5;


The **= Operator
The Exponentiation Assignment Operator raises a variable to the power of the operand.

let x = 10;
x **= 5;


The /= Operator
The Division Assignment Operator divides a variable.

let x = 10;
x /= 5;


The %= Operator
The Remainder Assignment Operator assigns a remainder to a variable.

let x = 10;
x %= 5;


The <<= Operator
The Left Shift Assignment Operator left shifts a variable.

let x = -100;
x <<= 5;


The >>= Operator
The Right Shift Assignment Operator right shifts a variable (signed).

let x = -100;
x >>= 5;


The >>>= Operator
The Unsigned Right Shift Assignment Operator right shifts a variable (unsigned).

let x = -100;
x >>>= 5;


The &= Operator
The Bitwise AND Assignment Operator does a bitwise AND operation on two operands and assigns the result to the the variable.

let x = 10;
x &= 5;


The |= Operator
The Bitwise OR Assignment Operator does a bitwise OR operation on two operands and assigns the result to the variable.

let x = 10;
x |= 5;


The ^= Operator
The Bitwise XOR Assignment Operator does a bitwise XOR operation on two operands and assigns the result to the variable.

let x = 10;
x ^= 5;


The &&= Operator
The Logical AND assignment operator is used between two values.

If the first value is true, the second value is assigned.

let x = 10;
x &&= 5;


The ||= Operator
The Logical OR assignment operator is used between two values.

If the first value is false, the second value is assigned.

let x = 10;
x ||= 5;


The ??= Operator
The Nullish coalescing assignment operator is used between two values.

If the first value is undefined or null, the second value is assigned.

let x = 10;
x ??= 5;

*/

/*
JavaScript has 8 Datatypes
1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. Null
7. Symbol
8. Object

The Object Datatype
The object data type can contain:

1. An object
2. An array
3. A date

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


The Concept of Data Types

In programming, data types is an important concept.

To be able to operate on variables, it is important to know something about the type.

Without data types, a computer cannot safely solve programming problems.

When adding a number and a string, JavaScript will treat the number as a string.

JavaScript evaluates expressions from left to right. Different sequences can produce different results:

let x = 16 + 4 + "Volvo";

Result:
20Volvo

let x = "Volvo" + 16 + 4;

Result:
Volvo164

JavaScript has dynamic types. This means that the same variable can be used to hold different data types:

let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String


JavaScript Strings

A string (or a text string) is a series of characters like "John Doe".

Strings are written with quotes. You can use single or double quotes:

// Using double quotes:
let carName1 = "Volvo XC60";

// Using single quotes:
let carName2 = 'Volvo XC60';


You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

// Single quote inside double quotes:
let answer1 = "It's alright";

// Single quotes inside double quotes:
let answer2 = "He is called 'Johnny'";

// Double quotes inside single quotes:
let answer3 = 'He is called "Johnny"';

*/


/**
 JavaScript Numbers
All JavaScript numbers are stored as decimal numbers (floating point).

Numbers can be written with, or without decimals:

// With decimals:
let x1 = 34.00;

// Without decimals:
let x2 = 34;


Exponential Notation
Extra large or extra small numbers can be written with scientific (exponential) notation:

let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

Most programming languages have many number types:

Whole numbers (integers):
byte (8-bit), short (16-bit), int (32-bit), long (64-bit)

Real numbers (floating-point):
float (32-bit), double (64-bit).

Javascript numbers are always one type:
double (64-bit floating point).


JavaScript BigInt
All JavaScript numbers are stored in a a 64-bit floating-point format.

JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values 
that are too big to be represented by a normal JavaScript Number.

let x = BigInt("123456789012345678901234567890");

A BigInt can not have decimals.

You cannot perform math between a BigInt type and a Number type.
 */


/**
 JavaScript Booleans
Booleans can only have two values: true or false.

let x = 5;
let y = 5;
let z = 6;
(x == y)       // Returns true
(x == z)       // Returns false
 */


/*
JavaScript Arrays
JavaScript arrays are written with square brackets.

Array items are separated by commas.

The following code declares (creates) an array called cars, containing three items (car names):

const cars = ["Saab", "Volvo", "BMW"];
Array indexes are zero-based, which means the first item is [0], second is [1], and so on.
 */


/*
JavaScript Objects
JavaScript objects are written with curly braces {}.

Object properties are written as name:value pairs, separated by commas.

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.
 */


/*
The typeof Operator
You can use the JavaScript typeof operator to find the type of a JavaScript variable.

The typeof operator returns the type of a variable or an expression:


typeof ""             // Returns "string"
typeof "John"         // Returns "string"
typeof "John Doe"     // Returns "string"


typeof 0              // Returns "number"
typeof 314            // Returns "number"
typeof 3.14           // Returns "number"
typeof (3)            // Returns "number"
typeof (3 + 4)        // Returns "number"
 */


/*
Undefined
In JavaScript, a variable without a value, has the value undefined. The type is also undefined.

let car;    // Value is undefined, type is undefined
Any variable can be emptied, by setting the value to undefined. The type will also be undefined.

car = undefined;    // Value is undefined, type is undefined


Empty Values
An empty value has nothing to do with undefined.

An empty string has both a legal value and a type.

let car = "";    // The value is "", the typeof is "string"
 */


/*
JavaScript Functions

A JavaScript function is a block of code designed to perform a particular task.

A JavaScript function is executed when "something" invokes it (calls it).

Function is defined with the function keyword, followed by a name, followed by parentheses ().

Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

The parentheses may include parameter names separated by commas:
(parameter1, parameter2, ...)

The code to be executed, by the function, is placed inside curly brackets: {}

Function parameters are listed inside the parentheses () in the function definition.

Function arguments are the values received by the function when it is invoked.

Inside the function, the arguments (the parameters) behave as local variables.

Function Invocation
The code inside the function will execute when "something" invokes (calls) the function:

When an event occurs (when a user clicks a button)
When it is invoked (called) from JavaScript code
Automatically (self invoked)

Function Return

When JavaScript reaches a return statement, the function will stop executing.

If the function was invoked from a statement, JavaScript will "return" to execute the code after the invoking statement.

Functions often compute a return value. The return value is "returned" back to the "caller":


Why Functions?
You can reuse code: Define the code once, and use it many times.

You can use the same code many times with different arguments, to produce different results.

The () Operator Invokes the Function
The function name alone refers to the function object, and the function name and parentheses () refers to the function result.

Accessing a function without () will return the function object instead of the function result.

Functions Used as Variable Values
Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.


Local Variables
Variables declared within a JavaScript function, become LOCAL to the function.

Local variables can only be accessed from within the function.

Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

Local variables are created when a function starts, and deleted when the function is completed.
*/

function myFunction(p1, p2) {
    return p1 * p2;
}

document.querySelector(".my-function-1").innerHTML = myFunction(5, 9);


var myFunc1 = myFunction1(4, 3);
document.querySelector(".my-function-2").innerHTML = myFunc1;

function myFunction1(a, b) {
    return a * b;
}


function toCelsius(f) {
    return (5 / 9) * (f - 32);
}
document.querySelector(".my-function-3").innerHTML = toCelsius(77);


function toCelsius2(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
document.querySelector(".my-function-4").innerHTML = toCelsius2;


function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let myFunc2 = toCelsius(55);
let textFunc2 = "The temperature is " + myFunc2 + " Celsius";
document.querySelector(".my-function-5").innerHTML = textFunc2;

let textFunc3 = "The temperature is " + toCelsius(22) + " Celsius";
document.querySelector(".my-function-6").innerHTML = textFunc3;


myFunction2();

function myFunction2() {
    let carNameFunc = "Tesla";
    document.querySelector(".my-function-7").innerHTML =
        typeof carNameFunc + " " + carNameFunc;
}

document.querySelector(".my-function-8").innerHTML =
    typeof carNameFunc;


/*
JavaScript Objects

Objects, Properties, and Methods

In real life, a car is an object.

A car has properties like weight and color, and methods like start and stop:

All cars have the same properties, but the property values differ from car to car.

All cars have the same methods, but the methods are performed at different times.

You have already learned that JavaScript variables are containers for data values.

Objects are variables too. But objects can contain many values.

The values are written as name:value pairs (name and value separated by a colon).

It is a common practice to declare objects with the const keyword.

Object Definition

You define (and create) a JavaScript object with an object literal:

Spaces and line breaks are not important. An object definition can span multiple lines:

Accessing Object Properties
You can access object properties in two ways:

objectName.propertyName or objectName["propertyName"]

Object Methods
Objects can also have methods.

Methods are actions that can be performed on objects.

Methods are stored in properties as function definitions.

this refers to the person object.

I.E. this.firstName means the firstName property of this.

I.E. this.firstName means the firstName property of person.

What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

In an object method, this refers to the object.
Alone, this refers to the global object.
In a function, this refers to the global object.
In a function, in strict mode, this is undefined.
In an event, this refers to the element that received the event.
Methods like call(), apply(), and bind() can refer this to any object

Do Not Declare Strings, Numbers, and Booleans as Objects!
When a JavaScript variable is declared with the keyword "new", the variable is created as an object:

x = new String();        // Declares x as a String object
y = new Number();        // Declares y as a Number object
z = new Boolean();       // Declares z as a Boolean object
Avoid String, Number, and Boolean objects. They complicate your code and slow down execution speed.

*/

// Create an object:
const carObject1 = { type: "Fiat", model: "500", color: "white" };

// Display some data from the object:
document.querySelector(".my-obj-1").innerHTML = "The car type is " + carObject1.type;

const personMidAge1 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };

// Display some data from the object:
document.querySelector(".my-obj-2").innerHTML =
    personMidAge1.firstName + " is " + personMidAge1.age + " years old.";


// Create an object:
const personMidAge2 = {
    firstName: "Jay",
    lastName: "Bo",
    age: 50,
    eyeColor: "blue"
};

// Display some data from the object:
document.querySelector(".my-obj-3").innerHTML =
    personMidAge2.firstName + " is " + personMidAge2.age + " years old.";


document.querySelector(".my-obj-4").innerHTML = personMidAge2.eyeColor;
document.querySelector(".my-obj-5").innerHTML = personMidAge2["lastName"];


// Create an object:
const personMidAge3 = {
    firstName: "Kcaj",
    lastName: "Leinad",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.querySelector(".my-obj-6").innerHTML = personMidAge3.fullName();


/*
JavaScript Events
HTML events are "things" that happen to HTML elements.

When JavaScript is used in HTML pages, JavaScript can "react" on these events.

HTML Events
An HTML event can be something the browser does, or something a user does.

Here are some examples of HTML events:

An HTML web page has finished loading
An HTML input field was changed
An HTML button was clicked
Often, when events happen, you may want to do something.

JavaScript lets you execute code when events are detected.

HTML allows event handler attributes, with JavaScript code, to be added to HTML elements.

With single quotes:

<element event='some JavaScript'>
With double quotes:

<element event="some JavaScript">

The event can changes the content of the element with id and class attribute.

The event can changes the content of its own element (using this.innerHTML):

Common HTML Events

Here is a list of some common HTML events:

Event	Description
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page

JavaScript Event Handlers
Event handlers can be used to handle and verify user input, user actions, and browser actions:

Things that should be done every time a page loads
Things that should be done when the page is closed
Action that should be performed when a user clicks a button
Content that should be verified when a user inputs data
And more ...
Many different methods can be used to let JavaScript work with events:

HTML event attributes can execute JavaScript code directly
HTML event attributes can call JavaScript functions
You can assign your own event handler functions to HTML elements
You can prevent events from being sent or being handled
And more ...
*/


function displayDate() {
    document.querySelector(".my-event-2").innerHTML = Date();
}


/*
JavaScript Strings

JavaScript strings are for storing and manipulating text.

A JavaScript string is zero or more characters written inside quotes.

let text = "John Doe";

You can use single or double quotes:

let carName1 = "Volvo XC60";  // Double quotes
let carName2 = 'Volvo XC60';  // Single quotes

You can use quotes inside a string, as long as they don't match the quotes surrounding the string:

let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';


String Length
To find the length of a string, use the built-in length property:

Escape Character
Because strings must be written within quotes, JavaScript will misunderstand this string:

let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code	Result	Description
\'	'	Single quote
\"	"	Double quote
\\	\	Backslash
The sequence \"  inserts a double quote in a string:


Breaking Long Code Lines
For best readability, programmers often like to avoid code lines longer than 80 characters.

If a JavaScript statement does not fit on one line, the best place to break it is after an operator:

You can also break up a code line within a text string with a single backslash:

The \ method is not the preferred method. It might not have universal support.
Some browsers do not allow spaces behind the \ character.

A safer way to break up a string, is to use string addition:

You cannot break up a code line with a backslash:

JavaScript Strings as Objects
Normally, JavaScript strings are primitive values, created from literals:

let x = "John";
But strings can also be defined as objects with the keyword new:

let y = new String("John");

Do not create Strings objects.

The new keyword complicates the code and slows down execution speed.

String objects can produce unexpected results:

When using the == operator, string and object are equal:

When using the === operator, string and object are not equal:
*/


let textString1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector(".my-string-1").innerHTML = textString1.length;


let textString2 = "We are the so-called \"Vikings\" from the north.";
document.querySelector(".my-string-2").innerHTML = textString2;


let textString3 = 'It\'s alright.';
document.querySelector(".my-string-3").innerHTML = textString3;


let textString4 = "The character \\ is called backslash.";
document.querySelector(".my-string-4").innerHTML = textString4;


document.querySelector(".my-string-5").innerHTML =
    "Hello Dolly!a";


document.querySelector(".my-string-6").innerHTML = "Hello \
Dolly!b";


document.querySelector(".my-string-7").innerHTML = "Hello " + "Dolly!c";

// x is a string
let textString5 = "John";

// y is an object
let textString6 = new String("John");

document.querySelector(".my-string-8").innerHTML =
    typeof textString5 + "<br>" + typeof textString6;


let textString7 = "John";        // this is a string
let textString8 = new String("John");  // this is an object
document.querySelector(".my-string-9").innerHTML = textString7 == textString8;


let textString9 = "John";        // this is a string
let textString10 = new String("John");  // this is an object

document.querySelector(".my-string-10").innerHTML = textString9 === textString10;


/*
JavaScript String Methods

String length
String slice()
String substring()
String substr()
String replace()
String replaceAll()
String toUpperCase()
String toLowerCase()
String concat()
String trim()
String trimStart()
String trimEnd()
String padStart()
String padEnd()
String charAt()
String charCodeAt()
String split()


The length property returns the length of a string:

The slice() extracts a part of a string and returns the extracted part in a new string:
The method takes 2 parameters: start position, and end position (end not included).
If you omit the second parameter, the method will slice out the rest of the string:
If a parameter is negative, the position is counted from the end of the string:


substring() is similar to slice().
The substring() method extract a part of a string and returns the extracted parts in a new string:
The difference is that start and end values less than 0 are treated as 0 in substring().
If you omit the second parameter, substring() will slice out the rest of the string.

The substr() method extract a part of a string and returns the extracted parts in a new string:
If you omit the second parameter, substr() will slice out the rest of the string.
If the first parameter is negative, the position counts from the end of the string.


Replacing String Content
The replace() method replaces a specified value with another value in a string:
The replace() method does not change the string it is called on.

The replace() method returns a new string.

The replace() method replaces only the first match

If you want to replace all matches, use a regular expression with the /g flag set.

By default, the replace() method replaces only the first match:

By default, the replace() method is case sensitive. Writing MICROSOFT (with upper-case) will not work:

To replace case insensitive, use a regular expression with an /i flag (insensitive):

To replace all matches, use a regular expression with a /g flag (global match):


The replaceAll() method allows you to specify a regular expression instead of a string to be replaced.

If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.


Converting to Upper and Lower Case
A string is converted to upper case with toUpperCase():

A string is converted to lower case with toLowerCase():


JavaScript String concat()

concat() joins two or more strings:

The concat() method can be used instead of the plus operator. These two lines do the same:

Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.

Note
All string methods return a new string. They don't modify the original string.
Formally said:
Strings are immutable: Strings cannot be changed, only replaced.


JavaScript String trim()
The trim() method removes whitespace from both sides of a string:

JavaScript String trimStart()
The trimStart() method works like trim(), but removes whitespace only from the start of a string.

JavaScript String trimEnd()
The trimEnd() method works like trim(), but removes whitespace only from the end of a string.


JavaScript String padStart()
The padStart() method pads a string from the start.
It pads a string with another string (multiple times) until it reaches a given length.

Note
The padStart() method is a string method.
To pad a number, convert the number to a string first.
See the example below.


JavaScript String padEnd()
The padEnd() method pads a string from the end.
It pads a string with another string (multiple times) until it reaches a given length.

Note
The padEnd() method is a string method.
To pad a number, convert the number to a string first.
See the example below.


Extracting String Characters
There are 3 methods for extracting string characters:

charAt(position)
charCodeAt(position)
Property access [ ]

JavaScript String charAt()
The charAt() method returns the character at a specified index (position) in a string:


JavaScript String charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:
The method returns a UTF-16 code (an integer between 0 and 65535).


Property Access
ECMAScript 5 (2009), the property access allows property access [ ] on strings:

Note
Property access might be a little unpredictable:

It makes strings look like arrays (but they are not)
If no character is found, [ ] returns undefined, while charAt() returns an empty string.
It is read only. str[0] = "A" gives no error (but does not work!)
Example
let text = "HELLO WORLD";
text[0] = "A";    // Gives no error, but does not work


Converting a String to an Array
If you want to work with a string as an array, you can convert it to an array.

JavaScript String split()
A string can be converted to an array with the split() method:


If the separator is omitted, the returned array will contain the whole string in index [0].
If the separator is "", the returned array will be an array of single characters:

If the separator is omitted, the returned array will contain the whole string in index [0].
If the separator is "", the returned array will be an array of single characters:

*/

let textStringMeth1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector(".my-strmeth-1").innerHTML = textStringMeth1.length;


let textStringMeth2 = "Apple, Banana, Kiwi";

let part1 = textStringMeth2.slice(7, 13);
document.querySelector(".my-strmeth-2").innerHTML = part1;

let part2 = textStringMeth2.slice(7);
document.querySelector(".my-strmeth-3").innerHTML = part2;

let part3 = textStringMeth2.slice(-12);
document.querySelector(".my-strmeth-4").innerHTML = part3;

let part4 = textStringMeth2.slice(-12, -6);
document.querySelector(".my-strmeth-5").innerHTML = part4;


let str1 = "Apple, Banana, Kiwi";
document.querySelector(".my-strmeth-6").innerHTML = str1.substring(7, 13);


let strMeth1 = "Apple, Banana, Kiwi";
let part5 = strMeth1.substr(7, 6);
document.querySelector(".my-strmeth-7").innerHTML = part5;


let str2 = "Apple, Banana, Kiwi";
document.querySelector(".my-strmeth-8").innerHTML = str2.substr(7);

let str3 = "Apple, Banana, Kiwi";
document.querySelector(".my-strmeth-9").innerHTML = str3.substr(-4);


function myReplaceFunction1() {
    let text = document.querySelector(".my-strmeth-10").innerHTML;
    document.querySelector(".my-strmeth-10").innerHTML =
        text.replace("Nigeria", "Ghana");
}


try {
    function myReplaceFunction2() {
        let text = document.querySelector(".my-strmeth-11").innerHTML;
        document.querySelector(".my-strmeth-11").innerHTML =
            text.replace("MICROSOFT", "W3Schools");
    }
}
catch (err) {
    document.querySelector(".my-strmeth-12").innerHTML = err;
}


let textOrigin1 = "Please visit Microsoft!";
let newText1 = textOrigin1.replace(/MICROSOFT/i, "W3Schools");

document.querySelector(".my-strmeth-13").innerHTML = newText1;


let textOrigin2 = "Please visit Microsoft and Microsoft!";
let newText2 = textOrigin2.replace(/Microsoft/g, "W3Schools");

document.querySelector(".my-strmeth-14").innerHTML = newText2;


let textOrigin3 = "I love cats. Cats are very easy to love. Cats are very popular."
textOrigin3 = textOrigin3.replaceAll("Cats", "Dogs");
textOrigin3 = textOrigin3.replaceAll("cats", "dogs");

document.querySelector(".my-strmeth-15").innerHTML = textOrigin3;



let textOrigin4 = "I love dogs. Dogs are very easy to love. Dogs are very popular."
textOrigin4 = textOrigin4.replaceAll(/Dogs/g, "Cats");
textOrigin4 = textOrigin4.replaceAll(/dogs/g, "cats");

document.querySelector(".my-strmeth-16").innerHTML = textOrigin4;


let textConvert1 = "Hello World!";
let textConvert2 = textConvert1.toUpperCase();

document.querySelector(".my-strmeth-17").innerHTML = textConvert2;


let textConvert3 = "Hello World!";
let textConvert4 = textConvert3.toLowerCase();
document.querySelector(".my-strmeth-18").innerHTML = textConvert4;


let textConcate1 = "Hello";
let textConcate2 = "World!";
let textConcate3 = textConcate1.concat(" ", textConcate2);
document.querySelector(".my-strmeth-19").innerHTML = textConcate3;

let textConcate4 = "Hello" + " " + "World!<br>";
document.querySelector(".my-strmeth-20").innerHTML = textConcate4;


let textConcate5 = "Hello".concat(" ", "World!");
document.querySelector(".my-strmeth-21").innerHTML = textConcate5;


let textTrim1 = "      Hello World!      ";
let textTrim2 = textTrim1.trim();
document.querySelector(".my-strmeth-22").innerHTML = textTrim2;


let textTrimStart1 = "     Hello World!     ";
let textTrimStart2 = textTrimStart1.trimStart();
document.querySelector(".my-strmeth-23").innerHTML = textTrimStart2;


let textTrimEnd1 = "     Hello World!     ";
let textTrimEnd2 = textTrimEnd1.trimEnd();
document.querySelector(".my-strmeth-24").innerHTML = textTrimEnd2;


let textPadding1 = "5";
let padded1 = textPadding1.padStart(4, "0");
document.querySelector(".my-strmeth-25").innerHTML = padded1;


let textPadding2 = "5";
let padded2 = textPadding2.padStart(4, "x");
document.querySelector(".my-strmeth-26").innerHTML = padded2;


let numb5 = 5;
let textPadding3 = numb5.toString();
let padded3 = textPadding3.padStart(4, "0");
document.querySelector(".my-strmeth-27").innerHTML = padded3;



let textPadding4 = "5";
let padded4 = textPadding4.padEnd(4, "0");
document.querySelector(".my-strmeth-28").innerHTML = padded4;


let textPadding5 = "5";
let padded5 = textPadding5.padEnd(4, "x");
document.querySelector(".my-strmeth-29").innerHTML = padded5;


let numb6 = 5;
let textPadding6 = numb6.toString();
let padded6 = textPadding6.padEnd(4, "0");
document.querySelector(".my-strmeth-30").innerHTML = padded6;


let textChar1 = "HELLO WORLD";
let charText1 = textChar1.charAt(0);
document.querySelector(".my-strmeth-31").innerHTML = charText1;


let textChar2 = "HELLO WORLD";
let charText2 = textChar2.charCodeAt(0);
document.querySelector(".my-strmeth-32").innerHTML = charText2;


let textAccess1 = "HELLO WORLD";
document.querySelector(".my-strmeth-33").innerHTML = textAccess1[0];


let textSplit1 = "a,b,c,d,e,f";
const myArraySplit1 = textSplit1.split(",");
document.querySelector(".my-strmeth-34").innerHTML = myArraySplit1[0];


let textSplit2 = "a,b,c,d,e,f";
const myArraySplit2 = textSplit2.split(" ");
document.querySelector(".my-strmeth-35").innerHTML = myArraySplit2[0];


let textSplit3 = "a,b,c,d,e,f";
const myArraySplit3 = textSplit3.split("|");
document.querySelector(".my-strmeth-36").innerHTML = myArraySplit3[0];



let textSplit4 = "Hello";
const myArraySplit4 = textSplit4.split("");

textSplit4 = "";
for (let i = 0; i < myArraySplit4.length; i++) {
    textSplit4 += myArraySplit4[i] + "<br>"
}
document.querySelector(".my-strmeth-37").innerHTML = textSplit4;



/*
String Search Methods

String indexOf()
String lastIndexOf()
String search()
String match()
String matchAll()
String includes()
String startsWith()
String endsWith()
 */


//The indexOf() method returns the index (position) the first occurrence of a string in a string:
let textIndex1 = "Please locate where 'locate' occurs!";
let index1 = textIndex1.indexOf("locate");
document.querySelector(".my-index-1").innerHTML = index1;


//The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
let textIndex2 = "Please locate where 'locate' occurs!";
let index2 = textIndex2.lastIndexOf("locate");
document.querySelector(".my-index-2").innerHTML = index1;

//Both indexOf() and lastIndexOf() return -1 if the text is not found:
let textIndex3 = "Please locate where 'locate' occurs!";
let index3 = textIndex3.indexOf("John");
document.querySelector(".my-index-3").innerHTML = index3;


let textIndex4 = "Please locate where 'locate' occurs!";
let index4 = textIndex4.lastIndexOf("John");
document.querySelector(".my-index-4").innerHTML = index4;


//Both methods accept a second parameter as the starting position for the search:

//The indexOf() method accepts a second parameter as the starting position for the search:
let textIndex5 = "Please locate where 'locate' occurs!";
let index5 = textIndex5.indexOf("locate", 15);
document.querySelector(".my-index-5").innerHTML = index5;


//The lastIndexOf() methods searches backwards (from the end to the beginning), meaning: if the second parameter is 15, 
//the search starts at position 15, and searches to the beginning of the string.
let textIndex6 = "Please locate where 'locate' occurs!";
let index6 = textIndex6.lastIndexOf("locate", 15);
document.querySelector(".my-index-6").innerHTML = index6;


//The search() method searches a string for a string (or a regular expression) and returns the position of the match:
let textIndex7 = "Please locate where 'locate' occurs!";
let index7 = textIndex7.search("locate");
document.querySelector(".my-index-7").innerHTML = index7;

let textIndex8 = "Please locate where 'locate' occurs!";
let index8 = textIndex8.search(/locate/);
document.querySelector(".my-index-8").innerHTML = index8;


/*
The two methods, indexOf() and search(), are equal?

They accept the same arguments (parameters), and return the same value?

The two methods are NOT equal. These are the differences:

The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).
*/


//The match() method returns an array containing the results of matching a string against a string (or a regular expression).
let textIndex9 = "The rain in SPAIN stays mainly in the plain";
const myArrIndex9 = textIndex9.match("ain");
document.querySelector(".my-index-9").innerHTML = myArrIndex9.length + " " + myArrIndex9;

let textIndex10 = "The rain in SPAIN stays mainly in the plain";
const myArrIndex10 = textIndex10.match(/ain/);
document.querySelector(".my-index-10").innerHTML = myArrIndex10.length + " " + myArrIndex10;

//Perform a global search for "ain":
let textIndex11 = "The rain in SPAIN stays mainly in the plain";
const myArrIndex11 = textIndex11.match(/ain/g);
document.querySelector(".my-index-11").innerHTML = myArrIndex11.length + " " + myArrIndex11;

//Perform a global, case-insensitive search for "ain":
let textIndex12 = "The rain in SPAIN stays mainly in the plain";
const myArrIndex12 = textIndex12.match(/ain/gi);
document.querySelector(".my-index-12").innerHTML = myArrIndex12.length + " " + myArrIndex12;


//JavaScript String matchAll()
//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

let textSearch1 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator1 = textSearch1.matchAll("Cats");

document.querySelector(".my-index-13").innerHTML = Array.from(iterator1);

//If the parameter is a regular expression, the global flag (g) must be set, otherwise a TypeError is thrown.
let textSearch2 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator2 = textSearch2.matchAll(/Cats/g);

document.querySelector(".my-index-14").innerHTML = Array.from(iterator2);


//If you want to search case insensitive, the insensitive flag (i) must be set:
let textSearch3 = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator3 = textSearch3.matchAll(/Cats/gi);

document.querySelector(".my-index-15").innerHTML = Array.from(iterator3);


/*
JavaScript String includes()
The includes() method returns true if a string contains a specified value.
Otherwise it returns false.
*/

//Check if a string includes a word:
let textSearch4 = "Hello world, welcome to the universe.";
const matchWord4 = textSearch4.includes("world");
document.querySelector(".my-index-16").innerHTML = matchWord4;


//Check if a string includes "world". Start at position 12:
let textSearch5 = "Hello world, welcome to the universe.";
const matchWord5 = textSearch5.includes("world", 12);
document.querySelector(".my-index-17").innerHTML = matchWord5;


/*
JavaScript String startsWith()
The startsWith() method returns true if a string begins with a specified value.

Otherwise it returns false:
*/

//Return true
let textSearch6 = "Hello world, welcome to the universe.";
const matchWord6 = textSearch6.startsWith("Hello");
document.querySelector(".my-index-18").innerHTML = matchWord6;

//Return false
let textSearch7 = "Hello world, welcome to the universe.";
const matchWord7 = textSearch7.startsWith("world");
document.querySelector(".my-index-18").innerHTML = matchWord7;

//A start position for the search can be specified:

//Return true
let textSearch8 = "Hello world, welcome to the universe.";
const matchWord8 = textSearch8.startsWith("world", 6);
document.querySelector(".my-index-19").innerHTML = matchWord8;

//Return false
let textSearch9 = "Hello world, welcome to the universe.";
const matchWord9 = textSearch9.startsWith("world", 5);
document.querySelector(".my-index-20").innerHTML = matchWord9;


/*
JavaScript String endsWith()
The endsWith() method returns true if a string ends with a specified value.

Otherwise it returns false:
*/

//Check if a string ends with "Doe":
let textSearch10 = "John Doe";
const matchWord10 = textSearch10.endsWith("Doe");
document.querySelector(".my-index-21").innerHTML = matchWord10;


//Check if the 11 first characters of a string ends with "world":
let textSearch11 = "Hello world, welcome to the universe.";
const matchWord11 = textSearch11.endsWith("world", 11);
document.querySelector(".my-index-22").innerHTML = matchWord11;



/*
JavaScript Template Literals

Synonyms:
Template Literals
Template Strings
String Templates
Back-Tics Syntax

Back-Tics Syntax
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
*/

let textSearch12 = `Hello World`;
document.querySelector(".my-index-23").innerHTML = textSearch12;


//With template literals, you can use both single and double quotes inside a string:
let textSearch13 = `He's often called "Johnny"`;
document.querySelector(".my-index-24").innerHTML = textSearch13;


//Template literals allows multiline strings:
let textSearch14 =
    `The quick
brown fox
jumps over
the lazy dog`;
document.querySelector(".my-index-25").innerHTML = textSearch14;


/*
Template literals provide an easy way to interpolate variables and expressions into strings.

The method is called string interpolation.

The syntax is:

${...}

Variable Substitutions

Template literals allow variables in strings:
*/

let userFirstName = "John";
let userLastName = "Doe";

let textSearch15 = `Welcome ${userFirstName}, ${userLastName}!`;
document.querySelector(".my-index-26").innerHTML = textSearch15;


//Automatic replacing of variables with real values is called string interpolation.

//Expression Substitution
//Template literals allow expressions in strings:

let salePrice = 10;
let vaTax = 0.25;

let saleTotal = `Total: ${(salePrice * (1 + vaTax)).toFixed(2)}`;
document.querySelector(".my-index-27").innerHTML = saleTotal;

//HTML Templates
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];
let tagHeaderH1 = "Start";
let tagHeaderH2 = "End"

let html = `<h1>${tagHeaderH1}</h1>`;

html += `<h2>${header}</h2><ul>`;

for (const x of tags) {
    html += `<li>${x}</li>`;
}

html += `</ul>`;

html += `<h1>${tagHeaderH2}</h1>`;

document.querySelector(".my-index-28").innerHTML = html;


/*
JavaScript Numbers
JavaScript has only one type of number. Numbers can be written with or without decimals.
*/

let tutNumber1 = 3.14;
let tutNumber2 = 3;
document.querySelector(".my-number-1").innerHTML = tutNumber1 + "<br>" + tutNumber2;


//Extra large or extra small numbers can be written with scientific (exponent) notation:
let tutNumber3 = 123e5;
let tutNumber4 = 123e-5;
document.querySelector(".my-number-2").innerHTML = tutNumber3 + "<br>" + tutNumber4;


/*
 JavaScript Numbers are Always 64-bit Floating Point
Unlike many other programming languages, JavaScript does not define different types of numbers, 
like integers, short, long, floating-point etc.

JavaScript numbers are always stored as double precision floating point numbers, 
following the international IEEE 754 standard.

This format stores numbers in 64 bits, where the number (the fraction) is stored in bits 0 to 51, 
the exponent in bits 52 to 62, and the sign in bit 63:

Value (aka Fraction/Mantissa)	    Exponent	                      Sign
52 bits (0 - 51) 	                11 bits (52 - 62)	              1 bit (63)
 */


/*
Integer Precision
Integers (numbers without a period or exponent notation) are accurate up to 15 digits.
 */


let tutNumber5 = 999999999999999;
let tutNumber6 = 9999999999999999;
document.querySelector(".my-number-3").innerHTML = tutNumber5 + "<br>" + tutNumber6;


/*The maximum number of decimals is 17.

Floating Precision
Floating point arithmetic is not always 100% accurate:*/

let tutNumber7 = 0.2 + 0.1;
document.querySelector(".my-number-4").innerHTML = "0.2 + 0.1 = " + tutNumber7;

//To solve the problem above, it helps to multiply and divide:

let tutNumber8 = (0.2 * 10 + 0.1 * 10) / 10;
document.querySelector(".my-number-5").innerHTML = "0.2 + 0.1 = " + tutNumber8;


/*
Adding Numbers and Strings
WARNING !!

JavaScript uses the + operator for both addition and concatenation.

Numbers are added. Strings are concatenated.

If you add two numbers, the result will be a number:
*/


let tutNumber9 = 10;
let tutNumber10 = 20;
let tutNumber11 = tutNumber9 + tutNumber10;
document.querySelector(".my-number-6").innerHTML = tutNumber11;


//If you add two strings, the result will be a string concatenation:

let tutNumber12 = "10";
let tutNumber13 = "20";
let tutNumber14 = tutNumber12 + tutNumber13;
document.querySelector(".my-number-7").innerHTML = tutNumber14;

//If you add a number and a string, the result will be a string concatenation:

let tutNumber15 = 10;
let tutNumber16 = "20";
let tutNumber17 = tutNumber15 + tutNumber16;
document.querySelector(".my-number-8").innerHTML = tutNumber17;

//If you add a string and a number, the result will be a string concatenation:

let tutNumber18 = 10;
let tutNumber19 = "20";
let tutNumber20 = tutNumber18 + tutNumber19;
document.querySelector(".my-number-9").innerHTML = tutNumber20;

//A common mistake is to expect this result to be 30:

var tutNumber21 = 10;
var tutNumber22 = 20;
document.querySelector(".my-number-10").innerHTML =
    "The result is: " + tutNumber21 + tutNumber22;

//A common mistake is to expect this result to be 102030:

let tutNumber23 = 10;
let tutNumber24 = 20;
let tutNumber25 = "30";
let result = tutNumber23 + tutNumber24 + tutNumber25;
document.querySelector(".my-number-11").innerHTML = result;


/*
The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.


Numeric Strings
JavaScript strings can have numeric content:
 */


let tutNumber26 = "100";
let tutNumber27 = "20";
let tutNumber28 = tutNumber26 / tutNumber27;
document.querySelector(".my-number-12").innerHTML = tutNumber28;


let tutNumber29 = "100";
let tutNumber30 = "20";
let tutNumber31 = tutNumber29 * tutNumber30;
document.querySelector(".my-number-13").innerHTML = tutNumber31;


let tutNumber32 = "100";
let tutNumber33 = "20";
let tutNumber34 = tutNumber32 - tutNumber33;
document.querySelector(".my-number-14").innerHTML = tutNumber34;


let tutNumber35 = "100";
let tutNumber36 = "20";
let tutNumber37 = tutNumber35 % tutNumber36;
document.querySelector(".my-number-14").innerHTML = tutNumber37;

//Concatenated
let tutNumber38 = "100";
let tutNumber39 = "20";
let tutNumber40 = tutNumber38 + tutNumber39;
document.querySelector(".my-number-15").innerHTML = tutNumber40;


/*
NaN - Not a Number
NaN is a JavaScript reserved word indicating that a number is not a legal number.

Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):
*/

let tutNumber41 = 100 / "Apple";
document.querySelectorAll(".my-number-16").innerHTML = tutNumber41;


//However, if the string is numeric, the result will be a number:


let tutNumber42 = 100 / "10";
document.querySelectorAll(".my-number-17").innerHTML = tutNumber42;

//If you use NaN in a mathematical operation, the result will also be NaN:

let tutNumber43 = NaN;
let tutNumber44 = 5;
let tutNumber45 = tutNumber43 + tutNumber44
document.querySelector(".my-number-18").innerHTML = tutNumber45;


//The result might be a concatenation
let tutNumber46 = NaN;
let tutNumber47 = "5";
let tutNumber48 = tutNumber46 + tutNumber47;
document.querySelector(".my-number-18").innerHTML = tutNumber48;


//NaN is a number: typeof NaN returns number:

let tutNumber49 = NaN;
document.querySelector(".my-number-19").innerHTML = typeof tutNumber49 + " " + tutNumber49;


/*
Infinity
Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside the largest possible number.
*/


let myNumber1 = 2;
let txt1 = "";
while (myNumber1 != Infinity) {
    myNumber1 = myNumber1 * myNumber1;
    txt1 = txt1 + myNumber1 + "<br>";
}
document.querySelector(".my-number-20").innerHTML = txt1;


//Division by zero generates Infinity

let tutNumber50 = 2 / 0;
let tutNumber51 = -2 / 0;
document.querySelector(".my-number-21").innerHTML = tutNumber50 + "<br>" + tutNumber51;

//Infinity is a number: typeof Infinity returns number.

document.querySelector(".my-number-22").innerHTML = "Type of infinity is a " + typeof Infinity;

/*
Hexadecimal
JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x.
*/
let tutNumber52 = 0xFF;
document.querySelector(".my-number-23").innerHTML = "0xFF = " + tutNumber52;


/*
Never write a number with a leading zero (like 07).
Some JavaScript versions interpret numbers as octal if they are written with a leading zero.

By default, JavaScript displays numbers as base 10 decimals.

But you can use the toString() method to output numbers from base 2 to base 36.

Hexadecimal is base 16. Decimal is base 10. Octal is base 8. Binary is base 2.
 */


let myNumber = 32;
document.querySelector(".my-number-24").innerHTML =
    "Decimal 32 = " + "<br><br>" + "Hexatrigesimal (base 36): " + myNumber.toString(36) + "<br>" +
    "Duotrigesimal (base 32): " + myNumber.toString(32) + "<br>" +
    "Hexadecimal (base 16): " + myNumber.toString(16) + "<br>" +
    "Duodecimal (base 12): " + myNumber.toString(12) + "<br>" +
    "Decimal (base 10): " + myNumber.toString(10) + "<br>" +
    "Octal (base 8): " + myNumber.toString(8) + "<br>" +
    "Binary (base 2): " + myNumber.toString(2);


/*
JavaScript Numbers as Objects
Normally JavaScript numbers are primitive values created from literals:

let x = 123;
But numbers can also be defined as objects with the keyword new:

let y = new Number(123);
 */

// x is a number
let tutNumber53 = 123;

// y is a Number object
let tutNumber54 = new Number(123);

document.querySelector(".my-number-25").innerHTML = typeof tutNumber53 + "<br>" + typeof tutNumber54;

document.querySelector(".my-number-26").innerHTML = tutNumber53 == tutNumber54;

document.querySelector(".my-number-27").innerHTML = tutNumber53 === tutNumber54;


// x is an object
let tutNumber55 = new Number(500);

// y is an object
let tutNumber56 = new Number(500);

document.querySelector(".my-number-28").innerHTML = (tutNumber55 == tutNumber56);

document.querySelector(".my-number-29").innerHTML = (tutNumber55 === tutNumber56);


/*
JavaScript Integer Accuracy
JavaScript integers are only accurate up to 15 digits:

Integer Precision
*/

//Integers (numbers without a period or exponent notation) are accurate up to 15 digits:

let tutNumber57 = 999999999999999;
let tutNumber58 = 9999999999999999;
document.querySelector(".my-number-30").innerHTML = tutNumber57 + "<br>" + tutNumber58;


/*How to Create a BigInt
To create a BigInt, append n to the end of an integer or call BigInt():*/

let tutNumber59 = 9999999999999999;
let tutNumber60 = BigInt("9999999999999999");
document.querySelector(".my-number-31").innerHTML = tutNumber59 + "<br>" + tutNumber60;

let tutNumber61 = 123456789012345678901234567890n;
let tutNumber62 = BigInt("123456789012345678901234567890");
document.querySelector(".my-number-32").innerHTML = tutNumber61 + "<br>" + tutNumber62;


/*igInt: A new JavaScript Datatype
The JavaScript typeof a BigInt is "bigint":*/

let tutNumber63 = BigInt(999999999999999);
let type1 = typeof tutNumber63;
document.querySelector(".my-number-33").innerHTML = type1;


/*BigInt Operators
Operators that can be used on a JavaScript Number can also be used on a BigInt.

BigInt Multiplication*/


let tutNumber64 = 9007199254740995n;
let tutNumber65 = 9007199254740995n;
let tutNumber66 = tutNumber64 * tutNumber65;

document.querySelector(".my-number-34").innerHTML = tutNumber66;

//Cannot mix BigInt and other types.
try {
    let tutNumber67 = 5n;
    let tutNumber68 = tutNumber67 / 2;
    document.querySelector(".my-number-35").innerHTML = tutNumber68;
}
catch (err) {
    document.querySelector(".my-number-35").innerHTML = err;
}

//Use explicit conversions.

let tutNumber69 = 5n;
let tutNumber70 = Number(tutNumber69) / 2;

document.querySelector(".my-number-36").innerHTML = tutNumber70;


/**
 BigInt Hex, Octal and Binary
BigInt can also be written in hexadecimal, octal, or binary notation:
 */

let hex = 0x20000000000003n;
let oct = 0o400000000000000003n;
let bin = 0b100000000000000000000000000000000000000000000000000011n;

document.querySelector(".my-number-37").innerHTML = hex + "<br>" + oct + "<br>" + bin;


/*
Precision Curiosity
Rounding can compromise program security:
*/

let tutNumber71 = 9007199254740992 === 9007199254740993;
document.querySelector(".my-number-38").innerHTML = tutNumber71;


/*
Minimum and Maximum Safe Integers
ES6 added max and min properties to the Number object:

MAX_SAFE_INTEGER
MIN_SAFE_INTEGER
*/

let tutNumber72 = Number.MAX_SAFE_INTEGER;
document.querySelector(".my-number-39").innerHTML = tutNumber72;

let tutNumber73 = Number.MIN_SAFE_INTEGER;
document.querySelector(".my-number-40").innerHTML = tutNumber73;


/*
New Number Methods
ES6 also added 2 new methods to the Number object:

Number.isInteger()
Number.isSafeInteger()
The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.
*/


let tutNumber74 = Number.isInteger(10);
let tutNumber75 = Number.isInteger(10.5);
let tutNumber76 = tutNumber74 + "<br>" + tutNumber75;
document.querySelector(".my-number-41").innerHTML = tutNumber76;



/* 
The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.


Safe integers are all integers from -(253 - 1) to +(253 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.
*/


let tutNumber77 = Number.isSafeInteger(10);
let tutNumber78 = Number.isSafeInteger(10.5);
let tutNumber79 = tutNumber77 + "<br>" + tutNumber78;
document.querySelector(".my-number-42").innerHTML = tutNumber79;


/*
JavaScript Number Methods
These number methods can be used on all JavaScript numbers:

Method	          Description
toString()	      Returns a number as a string
toExponential()	  Returns a number written in exponential notation
toFixed()	      Returns a number written with a number of decimals
toPrecision()	  Returns a number written with a specified length
ValueOf()	      Returns a number as a number
*/


/*
The toString() method returns a number as a string.
All number methods can be used on any type of numbers (literals, variables, or expressions):
*/

let tutNumber80 = 123;
document.querySelector(".my-number-43").innerHTML =
    tutNumber80.toString() + "<br>" + (123).toString() + "<br>" + (100 + 23).toString();


/*
The toExponential() Method
toExponential() returns a string, with a number rounded and written using exponential notation.

A parameter defines the number of characters behind the decimal point:

The parameter is optional. If you don't specify it, JavaScript will not round the number.
*/


let tutNumber81 = 9.656;
document.querySelector(".my-number-44").innerHTML =
    tutNumber81.toExponential() + "<br>" +
    tutNumber81.toExponential(2) + "<br>" +
    tutNumber81.toExponential(4) + "<br>" +
    tutNumber81.toExponential(6);

/*
The toFixed() Method
toFixed() returns a string, with the number written with a specified number of decimals:
toFixed(2) is perfect for working with money.
*/

let tutNumber82 = 9.656;
document.querySelector(".my-number-45").innerHTML =
    tutNumber82.toFixed(0) + "<br>" +
    tutNumber82.toFixed(1) + "<br>" +
    tutNumber82.toFixed(2) + "<br>" +
    tutNumber82.toFixed(4) + "<br>" +
    tutNumber82.toFixed(6);


/*
The toPrecision() Method
toPrecision() returns a string, with a number written with a specified length:
*/


let tutNumber83 = 9.656;
document.querySelector(".my-number-46").innerHTML =
    tutNumber83.toPrecision() + "<br>" +
    tutNumber83.toPrecision(2) + "<br>" +
    tutNumber83.toPrecision(4) + "<br>" +
    tutNumber83.toPrecision(6);


/*
The valueOf() Method
valueOf() returns a number as a number.
*/


let tutNumber84 = 123;

document.querySelector(".my-number-47").innerHTML =
    tutNumber84.valueOf() + "<br>" +
    (123).valueOf() + "<br>" +
    (100 + 23).valueOf();


/*
Converting Variables to Numbers
There are 3 JavaScript methods that can be used to convert a variable to a number:

Method	Description
Number()	Returns a number converted from its argument.
parseFloat()	Parses its argument and returns a floating point number
parseInt()	Parses its argument and returns a whole number
The methods above are not number methods. They are global JavaScript methods.

The Number() Method
The Number() method can be used to convert JavaScript variables to numbers:
*/


document.querySelector(".my-number-48").innerHTML =
    Number(true) + "<br>" +
    Number(false) + "<br>" +
    Number("10") + "<br>" +
    Number("  10") + "<br>" +
    Number("10  ") + "<br>" +
    Number(" 10  ") + "<br>" +
    Number("10.33") + "<br>" +
    Number("10,33") + "<br>" +
    Number("10 33") + "<br>" +
    Number("John");



/*
The Number() Method Used on Dates
Number() can also convert a date to a number.
*/

let tutNumber85 = new Date("1970-01-01");
document.querySelector(".my-number-49").innerHTML = Number(tutNumber85);


/**
 Note
The Date() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:
 */

let tutNumber86 = new Date("1970-01-02");
document.querySelector(".my-number-50").innerHTML = Number(tutNumber86);

let tutNumber87 = new Date("2017-09-30");
document.querySelector(".my-number-51").innerHTML = Number(tutNumber87);


/*
The parseInt() Method
parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
If the number cannot be converted, NaN (Not a Number) is returned.
*/


document.querySelector(".my-number-52").innerHTML =
    parseInt("-10") + "<br>" +
    parseInt("-10.33") + "<br>" +
    parseInt("10") + "<br>" +
    parseInt("10.33") + "<br>" +
    parseInt("10 6") + "<br>" +
    parseInt("10 years") + "<br>" +
    parseInt("years 10");


/*
The parseFloat() Method
parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
*/

document.querySelector(".my-number-53").innerHTML =
    parseFloat("10") + "<br>" +
    parseFloat("10.33") + "<br>" +
    parseFloat("10 6") + "<br>" +
    parseFloat("10 years") + "<br>" +
    parseFloat("years 10");


/*
Number Object Methods
These object methods belong to the Number object:

Method	Description
Number.isInteger()	Returns true if the argument is an integer
Number.isSafeInteger()	Returns true if the argument is a safe integer
Number.parseFloat()	Converts a string to a number
Number.parseInt()	Converts a string to a whole number
Number Methods Cannot be Used on Variables
The number methods above belong to the JavaScript Number Object.

These methods can only be accessed like Number.isInteger().

Using X.isInteger() where X is a variable, will result in an error:

TypeError X.isInteger is not a function.
*/


/*
The Number.isInteger() Method
The Number.isInteger() method returns true if the argument is an integer.
*/

document.querySelector(".my-number-54").innerHTML =
    Number.isInteger(10) + "<br>" + Number.isInteger(10.5);


/*
The Number.isSafeInteger() Method
A safe integer is an integer that can be exactly represented as a double precision number.

The Number.isSafeInteger() method returns true if the argument is a safe integer.
*/

document.querySelector(".my-number-55").innerHTML =
    Number.isSafeInteger(10) + "<br>" + Number.isSafeInteger(12345678901234567890);


/*
The Number.parseFloat() Method
Number.parseFloat() parses a string and returns a number.

Spaces are allowed. Only the first number is returned:

If the number cannot be converted, NaN (Not a Number) is returned.

Note
The Number methods Number.parseInt() and Number.parseFloat()

are the same as the

Global methods parseInt() and parseFloat().

The purpose is modularization of globals (to make it easier to use the same JavaScript code outside the browser).
*/

document.querySelector(".my-number-56").innerHTML =
    Number.parseFloat("10") + "<br>" +
    Number.parseFloat("10.33") + "<br>" +
    Number.parseFloat("10 20 30") + "<br>" +
    Number.parseFloat("10 years") + "<br>" +
    Number.parseFloat("years 10");


/*
The Number.parseInt() Method
Number.parseInt() parses a string and returns a whole number.

Spaces are allowed. Only the first number is returned:

If the number cannot be converted, NaN (Not a Number) is returned.
*/

document.querySelector(".my-number-57").innerHTML =
    Number.parseInt("-10") + "<br>" +
    Number.parseInt("-10.33") + "<br>" +
    Number.parseInt("10") + "<br>" +
    Number.parseInt("10.33") + "<br>" +
    Number.parseInt("10 6") + "<br>" +
    Number.parseInt("10 years") + "<br>" +
    Number.parseInt("years 10");


/*
JavaScript Number Properties

Property	Description
EPSILON	    The difference between 1 and the smallest number > 1.
MAX_VALUE	The largest number possible in JavaScript
MIN_VALUE	The smallest number possible in JavaScript
MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
POSITIVE_INFINITY	Infinity (returned on overflow)
NEGATIVE_INFINITY	Negative infinity (returned on overflow)

NaN	A "Not-a-Number" value
*/


/*
JavaScript EPSILON
Number.EPSILON is the difference between the smallest floating point number greater than 1 and 1.
*/

let tutNumber88 = Number.EPSILON;
document.querySelector(".my-number-58").innerHTML = tutNumber88;


/*
JavaScript MAX_VALUE
Number.MAX_VALUE is a constant representing the largest possible number in JavaScript.
*/

let tutNumber89 = Number.MAX_VALUE;
document.querySelector(".my-number-59").innerHTML = tutNumber89;


//Using a Number property on a variable, or value, will return undefined:


let tutNumber90 = 6;
document.querySelector(".my-number-60").innerHTML = tutNumber90.MAX_VALUE;


/*
JavaScript MIN_VALUE
Number.MIN_VALUE is a constant representing the lowest possible number in JavaScript.
*/

let tutNumber91 = Number.MIN_VALUE;
document.querySelector(".my-number-61").innerHTML = tutNumber91;


/*
JavaScript MAX_SAFE_INTEGER
Number.MAX_SAFE_INTEGER represents the maximum safe integer in JavaScript.

Number.MAX_SAFE_INTEGER is (253 - 1).
*/

let tutNumber92 = Number.MAX_SAFE_INTEGER;
document.querySelector(".my-number-62").innerHTML = tutNumber92;


/*
JavaScript MIN_SAFE_INTEGER
Number.MIN_SAFE_INTEGER represents the minimum safe integer in JavaScript.

Number.MIN_SAFE_INTEGER is -(253 - 1).
*/

let tutNumber93 = Number.MIN_SAFE_INTEGER;
document.querySelector(".my-number-63").innerHTML = tutNumber93;


//JavaScript POSITIVE_INFINITY

let tutNumber94 = Number.POSITIVE_INFINITY;
document.querySelector(".my-number-64").innerHTML = tutNumber94;

//POSITIVE_INFINITY is returned on overflow:

let tutNumber95 = 1 / 0;
document.querySelector(".my-number-65").innerHTML = tutNumber95;


//JavaScript NEGATIVE_INFINITY

let tutNumber96 = Number.NEGATIVE_INFINITY;
document.querySelector(".my-number-66").innerHTML = tutNumber96;

//NEGATIVE_INFINITY is returned on overflow:

let tutNumber97 = -1 / 0;
document.querySelector(".my-number-67").innerHTML = tutNumber97;


/*
JavaScript NaN - Not a Number
NaN is a JavaScript reserved word for a number that is not a legal number.
*/

document.querySelector(".my-number-68").innerHTML = Number.NaN;

//A number divided by a non-numeric string becomes NaN (Not a Number):

document.querySelector(".my-number-69").innerHTML = 100 / "Apple";

/**
 JavaScript Arrays
An array is a special variable, which can hold more than one value:
 */

const carsArray1 = ["Saab", "Volvo", "BMW"];
document.querySelector(".my-array-1").innerHTML = carsArray1;

//Spaces and line breaks are not important. A declaration can span multiple lines:
const carsArray2 = [
    "Saab",
    "Volvo",
    "BMW"
];
document.querySelector(".my-array-2").innerHTML = carsArray2;

//You can also create an array, and then provide the elements:
const carsArray3 = [];
carsArray3[0] = "Saab";
carsArray3[1] = "Volvo";
carsArray3[2] = "BMW";
document.querySelector(".my-array-3").innerHTML = carsArray3;

//The keyword new Array() also creates an Array, and assigns values to it:
//For simplicity, readability and execution speed, use the array literal method.
const carsArray4 = new Array("Saab", "Volvo", "BMW");
document.querySelector(".my-array-4").innerHTML = carsArray4;


/**
Accessing Array Elements
You access an array element by referring to the index number:
 */

const carsArray5 = ["Saab", "Volvo", "BMW"];
let carSelect1 = carsArray5[0];
document.querySelector(".my-array-5").innerHTML = carSelect1;


/**
 Changing an Array Element
Changes the value of the first array element:
 */
const carsArray6 = ["Saab", "Volvo", "BMW"];
document.querySelector(".my-array-6").innerHTML = carsArray6;
carsArray6[0] = "Opel";
document.querySelector(".my-array-7").innerHTML = carsArray6;


//The full array can be accessed by referring to the array name:
const carsArray7 = ["Saab", "Volvo", "BMW"];
document.querySelector(".my-array-8").innerHTML = carsArray7;

/*
Arrays are Objects
Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.
*/

const personArray1 = ["John", "Doe", 46];
document.querySelector(".my-array-9").innerHTML = typeof personArray1;

/*
You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;
*/

/**
 Array Properties and Methods
The real strength of JavaScript arrays are the built-in array properties and methods:
 */

/*
The length Property
The length property of an array returns the length of an array (the number of array elements).
*/

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits1.length;
document.querySelector(".my-array-10").innerHTML = length;


//Accessing the First Array Element

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector(".my-array-11").innerHTML = fruits2[0];


//Accessing the Last Array Element
const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
let fruit3 = fruits3[fruits3.length - 1];
document.querySelector(".my-array-12").innerHTML = fruit3;


/*
Looping Array Elements
One way to loop through an array, is using a for loop:
*/

const fruits4 = ["Banana", "Orange", "Apple", "Mango"];
let fLen4 = fruits4.length;

let textArray4 = "<ul>";
for (let i = 0; i < fLen4; i++) {
    textArray4 += "<li>" + fruits4[i] + "</li>";
}
textArray4 += "</ul>";

document.querySelector(".my-array-13").innerHTML = textArray4;


//You can also use the Array.forEach() function:

const fruits5 = ["Banana", "Orange", "Apple", "Mango"];

let textArray5 = "<ul>";
fruits5.forEach(myFunctionArray);
textArray5 += "</ul>";

document.querySelector(".my-array-14").innerHTML = textArray5;

function myFunctionArray(value) {
    textArray5 += "<li>" + value + "</li>";
}


/*
Adding Array Elements
The easiest way to add a new element to an array is using the push() method:
*/

const fruits6 = ["Banana", "Orange", "Apple"];
fruits6.push("Lemon");  // Adds a new element (Lemon) to fruits

document.querySelector(".my-array-15").innerHTML = fruits6;


const fruits7 = ["Banana", "Orange", "Apple"];
document.querySelector(".my-array-16").innerHTML = fruits7;

function myArrayPushFunction1() {
    fruits7.push("Pineapple");
    document.querySelector(".my-array-16").innerHTML = fruits7;
}


//The length property provides an easy way to append new elements to an array without using the push() method.

const fruits8 = ["Banana", "Orange", "Apple"];
document.querySelector(".my-array-17").innerHTML = fruits8;

function myArrayPushFunction2() {
    fruits8[fruits8.length] = "Pineapple";
    document.querySelector(".my-array-17").innerHTML = fruits8;
}


//Adding elements with high indexes can create undefined "holes" in an array.

const fruits9 = ["Banana", "Orange", "Apple"];
fruits9[6] = "Lemon";

let fLen9 = fruits9.length;
let textArray9 = "";
for (i = 0; i < fLen9; i++) {
    textArray9 += fruits9[i] + "<br>";
}

document.querySelector(".my-array-18").innerHTML = textArray9;

/**
 Associative Arrays
Many programming languages support arrays with named indexes.

Arrays with named indexes are called associative arrays (or hashes).

JavaScript does not support arrays with named indexes.

In JavaScript, arrays always use numbered indexes.  
 */
const personArray2 = [];
personArray2[0] = "John";
personArray2[1] = "Doe";
personArray2[2] = 46;
document.querySelector(".my-array-19").innerHTML =
    personArray2[0] + " " + personArray2.length;


/*
If you use named indexes, JavaScript will redefine the array to an object.

After that, some array methods and properties will produce incorrect results.
*/

const personArray3 = [];
personArray3["firstName"] = "John";
personArray3["lastName"] = "Doe";
personArray3["age"] = 46;
document.querySelector(".my-array-20").innerHTML =
    personArray3[0] + " " + personArray3.length;


//These two different statements both create a new array containing 6 numbers:
//Avoid using new Array(). Use [] instead.

const points1 = new Array(80, 100, 1, 5, 25, 10);
document.querySelector(".my-array-21").innerHTML = points1[0];
const points2 = [40, 100, 1, 5, 25, 10];
document.querySelector(".my-array-22").innerHTML = points2[0];


//A Common Error, const points = [40]; is not the same as: const points = new Array(40);


//Create an Array with one element.
var points3 = [40];
document.querySelector(".my-array-23").innerHTML = points3;

//// Create an array with 40 undefined elements:
var points4 = new Array(40);
document.querySelector(".my-array-24").innerHTML = points4[0];
document.querySelector(".my-array-25").innerHTML = points4[1];
document.querySelector(".my-array-26").innerHTML = points4[2];
document.querySelector(".my-array-27").innerHTML = points4[39];


/*
How to Recognize an Array

A common question is: How do I know if a variable is an array?

The problem is that the JavaScript operator typeof returns "object":
*/

const westAfricanCountries = ["Ghana", "Togo", "Nigeria", "Senegal"];
let typeWAC = typeof westAfricanCountries;
document.querySelector(".my-array-28").innerHTML = typeWAC;


/*
Solution 1:
To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray():
*/

const fruits10 = ["Banana", "Orange", "Apple"];
document.querySelector(".my-array-29").innerHTML = Array.isArray(fruits10);


/*
Solution 2:
The instanceof operator returns true if an object is created by a given constructor:
*/

var fruits11 = ["Banana", "Orange", "Apple"];
document.querySelector(".my-array-30").innerHTML = fruits11 instanceof Array;


//JavaScript Array Methods

/*
Converting Arrays to Strings
The JavaScript method toString() converts an array to a string of (comma separated) array values.
*/
const fruitsArr1 = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector(".my-array-31").innerHTML = fruitsArr1.toString();


/*
The join() method also joins all array elements into a string.
It behaves just like toString(), but in addition you can specify the separator:
*/
const fruitsArr2 = ["Banana", "Orange", "Apple", "Mango"];
document.querySelector(".my-array-32").innerHTML = fruitsArr2.join(" * ");



//import message1 from "./js/message.js";

//document.querySelector(".my-array-36").innerHTML = message1();


//JSON

const txtJson1 = '{"name":"John", "age":30, "city":"New York"}'
const objJson1 = JSON.parse(txtJson1);
document.querySelector(".my-array-33").innerHTML = objJson1.name + ", " + objJson1.age;


let textJson2 = '{"employees":[' +
    '{"firstName":"John","lastName":"Doe" },' +
    '{"firstName":"Anna","lastName":"Smith" },' +
    '{"firstName":"Peter","lastName":"Jones" }]}';

const objJson2 = JSON.parse(textJson2);
document.querySelector(".my-array-34").innerHTML =
    objJson2.employees[1].firstName + " " + objJson2.employees[1].lastName;



const textJson3 = '[ "Ford", "BMW", "Audi", "Fiat" ]';
const myObjJson3Arr = JSON.parse(textJson3);
document.querySelector(".my-array-35").innerHTML = myObjJson3Arr[0];


const textJson4 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const objJson4 = JSON.parse(textJson4);
objJson4.birth = new Date(objJson4.birth);
document.querySelector(".my-array-36").innerHTML = objJson4.name + ", " + objJson4.birth;


const textJson5 = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';

const objJson5 = JSON.parse(textJson5, function (key, value) {

    if (key == "birth") {
        return new Date(value);
    } else {
        return value;
    }

});

document.querySelector(".my-array-37").innerHTML = objJson5.name + ", " + objJson5.birth;


const textJson6 = '{"name":"John", "age":"function() {return 30;}", "city":"New York"}';
const objJson6 = JSON.parse(textJson6);
objJson6.age = eval("(" + objJson6.age + ")");
document.querySelector(".my-array-38").innerHTML = objJson6.name + ", " + objJson6.age();


const objJson7 = { name: "John", age: 30, city: "New York" };
const myJSON7 = JSON.stringify(objJson7);
document.querySelector(".my-array-39").innerHTML = myJSON7;


const arrJson8 = ["John", "Peter", "Sally", "Jane"];
const myJSON8 = JSON.stringify(arrJson8);
document.querySelector(".my-array-40").innerHTML = myJSON8;


const myObjJson9 = { name: "John", age: 31, city: "New York" };
const myJSON9 = JSON.stringify(myObjJson9);
localStorage.setItem("testJSON", myJSON9);

// Retrieving data:
let textJson9 = localStorage.getItem("testJSON");
let objJson9 = JSON.parse(textJson9);
document.querySelector(".my-array-41").innerHTML = objJson9.name +
    "<br>" + objJson9.age + "<br>" + objJson9.city;


const objJson10 = { name: "Jay Bo", today: new Date(), city: "London" };
const myJSON10 = JSON.stringify(objJson10);
document.querySelector(".my-array-42").innerHTML = myJSON10;


const objJson11 = { name: "Kuraf", age: function () { return 30; }, city: "Lagos" };
const myJSON11 = JSON.stringify(objJson11);
document.querySelector(".my-array-43").innerHTML = myJSON11;


const objJson12 = { name: "Atey", age: function () { return 30; }, city: "Accra" };
objJson12.age = objJson12.age.toString();
const myJSON12 = JSON.stringify(objJson12);
document.querySelector(".my-array-44").innerHTML = myJSON12;


const myObjJson13 = { "name": "John", "age": 30, "car": null };
document.querySelector(".my-array-45").innerHTML = myObjJson13.name;


const myJSON14 = '{"name":"John", "age":30, "car":null}';
const myObj14 = JSON.parse(myJSON14);
document.querySelector(".my-array-46").innerHTML = myObj14;
document.querySelector(".my-array-47").innerHTML = myObj14.name;
document.querySelector(".my-array-48").innerHTML = myObj14["name"];

let textJson14 = "";
for (const x in myObj14) {
    textJson14 += x + ", ";
}
document.querySelector(".my-array-49").innerHTML = textJson14;


let textJson15 = "";
for (const x in myObj14) {
    textJson15 += myObj14[x] + ", ";
}
document.querySelector(".my-array-50").innerHTML = textJson15;


const myArrayLit16 = ["Ford", "BMW", "Fiat"];
document.querySelector(".my-array-51").innerHTML = myArrayLit16;


const myJSON17 = '["Lambo", "Kantanka", "Bentley"]';
const myArrayJson17 = JSON.parse(myJSON17);
document.querySelector(".my-array-52").innerHTML = myArrayJson17;


const myJSON18 = '["Black", "White", "Green"]';
const myArrayJson18 = JSON.parse(myJSON18);
document.querySelector(".my-array-53").innerHTML = myArrayJson18[0];


const myJSON19 = '{"name":"John", "age":30, "cars":["Toyota", "BMW", "Fiat"]}';
const myObjJson19 = JSON.parse(myJSON19);
document.querySelector(".my-array-54").innerHTML = myObjJson19.cars[0];


const myJSON20 = '{"name":"John", "age":30, "cars":["Suzuki", "BMW", "Fiat"]}';
const myObjJson20 = JSON.parse(myJSON20);

let textJson20 = "";
for (let i in myObjJson20.cars) {
    textJson20 += myObjJson20.cars[i] + ", ";
}

document.querySelector(".my-array-55").innerHTML = textJson20;


const myJSON21 = '{"name":"John", "age":30, "cars":["Volks Wagon", "BMW", "Fiat"]}';
const myObjJson21 = JSON.parse(myJSON21);

let textJson21 = "";
for (let i = 0; i < myObjJson21.cars.length; i++) {
    textJson21 += myObjJson21.cars[i] + ", ";
}

document.querySelector(".my-array-56").innerHTML = textJson21;


function loadDoc3() {
    const xmlhttp = new XMLHttpRequest();

    xmlhttp.onload = function () {
        const myObj = JSON.parse(this.responseText);
        document.querySelector(".my-array-57").innerHTML = myObj.name;
    }

    xmlhttp.open("GET", "users_file.php");
    xmlhttp.send();
}




//AJAX

function loadDoc1() {

    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();

    //// Define a callback function to use or display data
    xhttp.onload = function () {
        document.querySelector(".my-array-58").innerHTML =
            this.responseText;
    }

    // Send a request
    xhttp.open("GET", "ajax_info.txt");
    xhttp.send();
}



function loadDoc2() {
    // Create an XMLHttpRequest object
    const xhttp = new XMLHttpRequest();


    //// Define a callback function to use data
    xhttp.onload = function () {
        myFunctionXml(this);
    }
    //send a request
    xhttp.open("GET", "cd_catalog.xml");
    xhttp.send();
}


//// Define a function to display data
function myFunctionXml(xml) {

    //set xml object
    const xmlDoc = xml.responseXML;

    //get xml file parentNodes (CD)
    const x = xmlDoc.getElementsByTagName("CD");

    //create table header of childNodes (ARTIST and TITLE)
    let table = "<tr><th>Artist</th><th>Title</th></tr>";

    //Loop for Artist and Title data
    for (let i = 0; i < x.length; i++) {
        table += "<tr><td>" +
            x[i].getElementsByTagName("ARTIST")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    //Output data in HTML
    document.querySelector("#my-table").innerHTML = table;
}


//API

let file1 = "ajax_info.txt"

fetch(file1)
    .then(xApi => xApi.text())
    .then(yApi => document.querySelector(".my-api-1").innerHTML = yApi);


getText("info.txt");

async function getText(file) {
    let xApi = await fetch(file);
    let yApi = await xApi.text();
    document.querySelector(".my-api-2").innerHTML = yApi;
}

getText1("ajax_info.txt");
async function getText1(file) {
    let myObject = await fetch(file);
    let myText = await myObject.text();
    document.querySelector(".my-api-3").innerHTML = myText;
}


{

    const x = document.querySelector(".my-api-4");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition, showError);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
    }

    function showError(error) {
        switch (error.code) {
            case error.PERMISSION_DENIED:
                x.innerHTML = "User denied the request for Geolocation."
                break;
            case error.POSITION_UNAVAILABLE:
                x.innerHTML = "Location information is unavailable."
                break;
            case error.TIMEOUT:
                x.innerHTML = "The request to get user location timed out."
                break;
            case error.UNKNOWN_ERROR:
                x.innerHTML = "An unknown error occurred."
                break;
        }
    }

}


const para = document.createElement("p");
const node = document.createTextNode("This is new.");
para.appendChild(node);
const element = document.querySelector("#div1");
element.appendChild(para);


document.querySelector("#myBtn").addEventListener("click", displayDate);

function displayDate() {
    document.querySelector("#my-api-5").innerHTML = Date();
}


//Advance Objects

// Create and display a variable:
let personAdvObj1 = "John Doe";
document.querySelector(".my-adv-1").innerHTML = personAdvObj1;

//Create and display object property value
let personAdvObj2 = {
    firstName: "Jay",
    lastName: "Bo",
    age: 50,
    eyeColor: "blue"
};

document.querySelector(".my-adv-2").innerHTML = personAdvObj2.firstName + " " + personAdvObj2.lastName;


const personAdvObj3 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

document.querySelector(".my-adv-3").innerHTML = personAdvObj3.firstName + " " + personAdvObj3.lastName;


const personAdvObj4 = { firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue" };
document.querySelector(".my-adv-4").innerHTML =
    personAdvObj4.firstName + " is " + personAdvObj4.age + " years old.";


const personAdvObj5 = {
    firstName: "Jay",
    lastName: "Bo",
    age: 50,
    eyeColor: "blue"
};

document.querySelector(".my-adv-5").innerHTML =
    personAdvObj5.firstName + " is " + personAdvObj5.age + " years old.";


const personAdvObj6 = {};
personAdvObj6.firstName = "Manny";
personAdvObj6.lastName = "Kuraf";
personAdvObj6.age = 67;
personAdvObj6.eyeColor = "brown";

document.querySelector(".my-adv-6").innerHTML =
    personAdvObj6.firstName + " is " + personAdvObj6.age + " years old.";


const personAdvObj7 = new Object();
personAdvObj7.firstName = "John";
personAdvObj7.lastName = "Doe";
personAdvObj7.age = 50;
personAdvObj7.eyeColor = "blue";

document.querySelector(".my-adv-7").innerHTML =
    personAdvObj7.firstName + " is " + personAdvObj7.age + " years old.";


const personAdvObj8 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

const personAdvObj9 = personAdvObj8;
personAdvObj9.age = 10;

document.querySelector(".my-adv-8").innerHTML =
    personAdvObj8.firstName + " is " + personAdvObj8.age + " years old.";


const personAdvObj10 = {
    firstname: "Neap",
    lastname: "Stun",
    age: 40,
    eyecolor: "blue"
};

document.querySelector(".my-adv-9").innerHTML = personAdvObj10["firstname"] + " is " + personAdvObj10["age"] + " years old.";


const personAdvObj11 = {
    fname: "John",
    lname: "Doe",
    age: 25
};

let txtAdv11 = "";
for (let x in personAdvObj11) {
    txtAdv11 += personAdvObj11[x] + " ";
}

document.querySelector(".my-adv-11").innerHTML = txtAdv11;


const personAdvObj12 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

personAdvObj12.nationality = "English";
document.querySelector(".my-adv-12").innerHTML =
    personAdvObj12.firstname + " is " + personAdvObj12.nationality + ".";


const personAdvObj13 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

delete personAdvObj13.age;

document.querySelector(".my-adv-13").innerHTML =
    personAdvObj13.firstname + " is " + personAdvObj13.age + " years old.";


const personAdvObj14 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
};

delete personAdvObj14["age"];

document.querySelector(".my-adv-14").innerHTML =
    personAdvObj14.firstname + " is " + personAdvObj14.age + " years old.";


const myAdvObj15 = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
}
document.querySelector(".my-adv-15").innerHTML = myAdvObj15.cars.car1;
document.querySelector(".my-adv-16").innerHTML = myAdvObj15.cars["car2"];
document.querySelector(".my-adv-17").innerHTML = myAdvObj15["cars"]["car3"];

let p1 = "cars";
let p2 = "car2";
document.querySelector(".my-adv-18").innerHTML = myAdvObj15[p1][p2];


let textAdv19 = "";
const myAdvObj19 = {
    name: "John",
    age: 30,
    cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
    ]
}

for (let i in myAdvObj19.cars) {
    textAdv19 += "<h2>" + myAdvObj19.cars[i].name + "</h2>";
    for (let j in myAdvObj19.cars[i].models) {
        textAdv19 += myAdvObj19.cars[i].models[j] + "<br>";
    }
}

document.querySelector(".my-adv-19").innerHTML = textAdv19;


const personAdvObj20 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object:
document.querySelector(".my-adv-20").innerHTML = personAdvObj20.fullName();


const personAdvObj21 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};

personAdvObj21.name = function () {
    return this.firstName + " " + this.lastName;
};

document.querySelector(".my-adv-21").innerHTML =
    "My father is " + personAdvObj21.name();


const personAdvObj22 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
};
personAdvObj22.name = function () {
    return (this.firstName + " " + this.lastName).toUpperCase();
};

document.querySelector(".my-adv-22").innerHTML =
    "My father is " + personAdvObj22.name();


const personAdvObj23 = {
    name: "John",
    age: 30,
    city: "New York"
};

document.querySelector(".my-adv-23").innerHTML = Object.values(personAdvObj23);


const personAdvObj24 = {
    name: "John",
    age: 30,
    city: "New York"
};

const myArray24 = Object.values(personAdvObj24);
document.querySelector(".my-adv-24").innerHTML = myArray24;


const personAdvObj25 = {
    name: "John",
    age: 30,
    city: "New York"
};

document.querySelector(".my-adv-25").innerHTML = JSON.stringify(personAdvObj25);

let myString26 = JSON.stringify(personAdvObj25);
document.querySelector(".my-adv-26").innerHTML = myString26;


var personAdvObj27 = {
    name: "John",
    today: new Date()
};

let myString27 = JSON.stringify(personAdvObj27);

document.querySelector(".my-adv-27").innerHTML = myString27;


const personAdvObj28 = {
    name: "John",
    age: function () { return 30; }
};

let myString28 = JSON.stringify(personAdvObj28);
document.querySelector(".my-adv-28").innerHTML = myString28;


const personAdvObj29 = {
    name: "John",
    age: function () { return 30; }
};
personAdvObj29.age = personAdvObj29.age.toString();

let myString29 = JSON.stringify(personAdvObj29);
document.querySelector(".my-adv-29").innerHTML = myString29;



const arr30 = ["John", "Peter", "Sally", "Jane"];
let myString30 = JSON.stringify(arr30);
document.querySelector(".my-adv-30").innerHTML = myString30;


const personAdvObj31 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

// Display data from the object using a getter:
document.querySelector(".my-adv-31").innerHTML = personAdvObj31.lang;


const personAdvObj32 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang;
    }
};

// Set an object property using a setter:
personAdvObj32.lang = "en";

// Display data from the object:
document.querySelector(".my-adv-32").innerHTML = personAdvObj32.language;




// Create an object:
const personAdvObj33 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object using a method:
document.querySelector(".my-adv-33").innerHTML = personAdvObj33.fullName();


// Create an object:
const personAdvObj34 = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
};
// Display data from the object using a getter:
document.querySelector(".my-adv-34").innerHTML = personAdvObj34.fullName;


// Create an object:
const personAdvObj35 = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        //output language value in uppercase
        return this.language.toUpperCase();
    }
};

// Display data from the object using a getter:
document.querySelector(".my-adv-35").innerHTML = personAdvObj35.lang;


const personAdvObj36 = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
        this.language = lang.toUpperCase();
    }
};

// Set an object property using a setter:
personAdvObj36.lang = "en";

// Display data from the object:
document.querySelector(".my-adv-36").innerHTML = personAdvObj36.language;



{
    // Define an object
    const obj = { counter: 0 };

    // Define Setters and Getters
    Object.defineProperty(obj, "reset", {
        get: function () { this.counter = 0; }
    });
    Object.defineProperty(obj, "increment", {
        get: function () { this.counter++; }
    });
    Object.defineProperty(obj, "decrement", {
        get: function () { this.counter--; }
    });
    Object.defineProperty(obj, "add", {
        set: function (value) { this.counter += value; }
    });
    Object.defineProperty(obj, "subtract", {
        set: function (value) { this.counter -= value; }
    });

    // Play with counter:
    obj.reset;
    obj.add = 5;
    obj.subtract = 1;
    obj.increment;
    obj.decrement;
    document.querySelector(".my-adv-37").innerHTML = obj.counter;
}


// Constructor function for Person objects
function PersonAdvObj38(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create a Person object
const myFather38 = new PersonAdvObj38("John", "Doe", 80, "blue");

// Display age
document.querySelector(".my-adv-38").innerHTML =
    "My father is " + myFather38.age + ".";



// Constructor function for Person objects
function PersonAdvObj39(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create two Person objects
const myFather39 = new PersonAdvObj39("John", "Doe", 64, "blue");
const myMother39 = new PersonAdvObj39("Sally", "Rally", 58, "green");

// Display age
document.querySelector(".my-adv-39").innerHTML =
    "My father is " + myFather39.age + ". My mother is " + myMother39.age + ".";


// Constructor function for Person objects
function PersonAdvObj40(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
const myFather40 = new PersonAdvObj40("John", "Doe", 85, "blue");
const myMother40 = new PersonAdvObj40("Sally", "Rally", 48, "green");

// Add nationality to first object
myFather40.nationality = "English";

// Display nationality 
document.querySelector(".my-adv-40").innerHTML =
    "My father is " + myFather40.nationality;


// Constructor function for Person objects
function PersonAdvObj41(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

// Create 2 Person objects
const myFather41 = new PersonAdvObj41("John", "Doe", 50, "blue");
const myMother41 = new PersonAdvObj41("Sally", "Rally", 48, "green");

// Add a name method to first object
myFather41.name = function () {
    return this.firstName + " " + this.lastName;
};

// Display full name
document.querySelector(".my-adv-41").innerHTML =
    "My father is " + myFather41.name();


// Constructor function for Person objects
function PersonAdvObj42(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "Ghanaian";
}

// Create 2 Person objects
const myFather42 = new PersonAdvObj42("John", "Doe", 50, "blue");
const myMother42 = new PersonAdvObj42("Sally", "Rally", 48, "green");

// Display nationality
document.querySelector(".my-adv-42").innerHTML =
    "My father is " + myFather42.nationality + ". My mother is " + myMother42.nationality;




    function PersonAdvObj43(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.name = function() {
          return this.firstName + " " + this.lastName
        };
      }
      
      // Create a Person object
      const myFather43 = new PersonAdvObj43("John", "Doe", 50, "blue");
      
      // Display full name
      document.querySelector(".my-adv-43").innerHTML =
      "My father is " + myFather43.name();  
      
      
// Constructor function for Person objects
function PersonAdvObj44(firstName,lastName,age,eyeColor) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.eyeColor = eyeColor;
    this.changeName = function (name) {
      this.lastName = name;
    }
  }
  // Create a Person object
  const myMother44 = new PersonAdvObj44("Sally","Rally",48,"green");
  
  // Change last name
  myMother44.changeName("Moe");
  
  // Display last name
  document.querySelector(".my-adv-44").innerHTML =
  "My mother's last name is " + myMother44.lastName;

{
const x1 = new String();   // A new String object
const x2 = new Number();   // A new Number object
const x3 = new Boolean();  // A new Boolean object
const x4 = new Object();   // A new Object object
const x5 = new Array();    // A new Array object
const x6 = new RegExp();   // A new RegExp object
const x7 = new Function(); // A new Function object
const x8 = new Date();     // A new Date object

// Display the type of all objects
document.querySelector(".my-adv-45").innerHTML =
"x1: " + typeof x1 + "<br>" +
"x2: " + typeof x2 + "<br>" +
"x3: " + typeof x3 + "<br>" +
"x4: " + typeof x4 + "<br>" +
"x5: " + typeof x5 + "<br>" +
"x6: " + typeof x6 + "<br>" +
"x7: " + typeof x7 + "<br>" +
"x8: " + typeof x8 + "<br>";
}


{
    let x1 = "";      // string 
    let x2 = 0;       // number
    let x3 = false;   // boolean
    const x4 = {};    // Object object
    const x5 = [];    // Array object
    const x6 = /()/;  // RegExp object
    const x7 = function(){};  // function
    
    // Display the type of all
    document.querySelector(".my-adv-46").innerHTML =
    "x1: " + typeof x1 + "<br>" +
    "x2: " + typeof x2 + "<br>" +
    "x3: " + typeof x3 + "<br>" +
    "x4: " + typeof x4 + "<br>" +
    "x5: " + typeof x5 + "<br>" +
    "x6: " + typeof x6 + "<br>" +
    "x7: " + typeof x7 + "<br>";

}


function PersonAdvObj46(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  const myFather46 = new PersonAdvObj46("John", "Doe", 50, "blue");
  const myMother46 = new PersonAdvObj46("Sally", "Rally", 48, "green");
  
  document.querySelector(".my-adv-46").innerHTML =
  "My father is " + myFather46.age + ". My mother is " + myMother46.age; 


  function PersonAdvObj47(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  PersonAdvObj47.nationality = "English";
  
  const myFather47 = new PersonAdvObj47("John", "Doe", 50, "blue");
  const myMother47 = new PersonAdvObj47("Sally", "Rally", 48, "green");
  
  document.querySelector(".my-adv-47").innerHTML =
  "The nationality of my father is " + myFather47.nationality; 


  function PersonAdvObj48(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    this.nationality = "English";
  }
  
  const myFather48 = new PersonAdvObj48("Peter", "Doe", 50, "blue");
  const myMother48 = new PersonAdvObj48("Marther", "Rally", 48, "green");
  
  document.querySelector(".my-adv-48").innerHTML =
  "The nationality of my father is " + myFather48.nationality + ". The nationality of my mother is " + myMother48.nationality;


  function PersonAdvObj49(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  PersonAdvObj49.prototype.nationality = "English";
  
  const myFather49 = new PersonAdvObj49("John", "Doe", 50, "blue");
  document.querySelector(".my-adv-49").innerHTML =
  "The nationality of my father is " + myFather49.nationality; 



  function PersonAdvObj50(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  PersonAdvObj50.prototype.name = function() {
    return this.firstName + " " + this.lastName
  };
  
  const myFather50 = new PersonAdvObj50("Roland", "Doe", 50, "blue");
  document.querySelector(".my-adv-50").innerHTML =
  "My father is " + myFather50.name();
  
  
const name = "W3Schools";

// List all Elements
let text = ""
for (const x of name) {
  text += x + "<br>";
}

document.querySelector(".my-adv-50").innerHTML = text;

{
// Home Made Iterable
function myNumbers() {
    let n = 0;
    return {
      next: function() {
        n += 10;
        return {value:n, done:false};
      }
    };
  }
  
  // Create Iterable
  const n = myNumbers();
  n.next(); // 10
  n.next(); // 20
  n.next(); // 30
  n.next(); // 30
  
  
  document.querySelector(".my-adv-51").innerHTML = n.next().value;
}


{
  // Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

let text = ""
for (const num of myNumbers) {
  text += num +"<br>"
}

document.querySelector(".my-adv-52").innerHTML = text;

}




{

    // Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value:n, done:done};
    }
  };
}

// Create an Iterator
let iterator = myNumbers[Symbol.iterator]();

let text = ""
while (true) {
  const result = iterator.next();
  if (result.done) break;
  text += result.value +"<br>";
}

document.querySelector(".my-adv-53").innerHTML = text;

}


{
    // Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.querySelector(".my-adv-54").innerHTML = letters.size;
}


{
    // Create a Set
const letters = new Set();

// Add Values to the Set
letters.add("a");
letters.add("b");
letters.add("c");

// Display set.size
document.querySelector(".my-adv-55").innerHTML = letters.size;
}



{

    // Create a Set
const letters = new Set();

// Create Variables
const a = "a";
const b = "b";
const c = "c";

// Add the Variables to the Set
letters.add(a);
letters.add(b);
letters.add(c);

// Display set.size
document.querySelector(".my-adv-56").innerHTML = letters.size;

}



{
    // Create a new Set
const letters = new Set(["a","b","c"]);

// Add a new Element
letters.add("d");
letters.add("e");

// Display set.size
document.querySelector(".my-adv-57").innerHTML = letters.size;
}


{
   // Create a Set
const letters = new Set();

// Add values to the Set
letters.add("a");
letters.add("b");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");
letters.add("c");

// Display set.size
document.querySelector(".my-adv-58").innerHTML = letters.size;
}



{
    // Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
letters.forEach (function(value) {
  text += value + "<br>";
})

document.querySelector(".my-adv-59").innerHTML = text;
}


{
    // Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.querySelector(".my-adv-60").innerHTML = letters.values();
}


{
    // Create a Set
const letters = new Set(["a","b","c"]);

// List all Elements
let text = "";
for (const x of letters.values()) {
  text += x + "<br>";
}

document.querySelector(".my-adv-61").innerHTML = text;
}


{
    // Create a Set
const letters = new Set(["a","b","c"]);

// Display set.size
document.querySelector(".my-adv-62").innerHTML = letters.keys();
}


{
    // Create a Set
const letters = new Set(["a","b","c"]);

// List all entries
const iterator = letters.entries();
let text = "";
for (const entry of iterator) {
  text += entry + "<br>";
}

document.querySelector(".my-adv-63").innerHTML = text;
}


{
    // Create a new Set
const letters = new Set(["a","b","c"]);

// Display typeof
document.querySelector(".my-adv-64").innerHTML = typeof letters;
}

{
// Create a new Set
const letters = new Set(["a","b","c"]);

// Display typeof
document.querySelector(".my-adv-65").innerHTML = letters instanceof Set;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-67").innerHTML = fruits.get("bananas");
}


{
    // Create a Map
const fruits = new Map();

// Set Map Values
fruits.set("apples", 500);
fruits.set("bananas", 300);
fruits.set("oranges", 200);

document.querySelector(".my-adv-68").innerHTML = fruits.get("apples");
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-69").innerHTML = fruits.get("apples");
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-70").innerHTML = fruits.size;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Delete an Element
  fruits.delete("apples");
  
  document.querySelector(".my-adv-71").innerHTML = fruits.size;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Clear the Map
  fruits.clear();
  
  document.querySelector(".my-adv-72").innerHTML = fruits.size;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-73").innerHTML = fruits.has("apples");
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  // Delete an Element
  fruits.delete("apples");
  
  document.querySelector(".my-adv-74").innerHTML = fruits.has("apples");
}


{
  // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-75").innerHTML = typeof fruits; 
    
}



{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  document.querySelector(".my-adv-76").innerHTML = fruits instanceof Map;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  fruits.forEach (function(value, key) {
    text += key + ' = ' + value + "<br>"
  })
  
  document.querySelector(".my-adv-77").innerHTML = text;
}



{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  for (const x of fruits.entries()) {
    text += x + "<br>";
  }
  
  document.querySelector(".my-adv-78").innerHTML = text;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  for (const x of fruits.keys()) {
    text += x + "<br>";
  }
  
  document.querySelector(".my-adv-79").innerHTML = text;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let text = "";
  for (const x of fruits.values()) {
    text += x + "<br>";
  }
  
  document.querySelector(".my-adv-80").innerHTML = text;
}


{
    // Create a Map
const fruits = new Map([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]
  ]);
  
  let total = 0;
  for (const x of fruits.values()) {
    total += x;
  }
  
  document.querySelector(".my-adv-81").innerHTML = total;
}

{
// Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add the Objects to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.querySelector(".my-adv-82").innerHTML = fruits.get(apples);
}


{
    // Create Objects
const apples = {name: 'Apples'};
const bananas = {name: 'Bananas'};
const oranges = {name: 'Oranges'};

// Create a Map
const fruits = new Map();

// Add Elements to the Map
fruits.set(apples, 500);
fruits.set(bananas, 300);
fruits.set(oranges, 200);

document.querySelector(".my-adv-83").innerHTML = fruits.get("apples");
}






































{
    loadDoc3();

    function loadDoc3() {
        // Create an XMLHttpRequest object
        const xhttp = new XMLHttpRequest();
    
    
        //// Define a callback function to use data
        xhttp.onload = function () {
            myFunctionTechWord(this);
        }
        //send a request
        xhttp.open("GET", "tech_terms.xml");
        xhttp.send();
    }
    

    //// Define a function to display data
function myFunctionTechWord(xml) {

    //set xml object
    const xmlDoc = xml.responseXML;

    //get xml file parentNodes (WORD)
    const x = xmlDoc.getElementsByTagName("WORD");


    //create table header of childNodes (ARTIST and TITLE)
    let table = "<tr><th>WORD</th><th>MEANING</th></tr>";

    //Loop for Artist and Title data
    for (let i = 0; i < x.length; i++) {
    
        table += "<tr><td>" +
            x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
            "</td><td>" +
            x[i].getElementsByTagName("MEANING")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }

    //Output data in HTML
    document.querySelector("#my-table1").innerHTML = table;
}

}





    
function myFunctionWord() {



    const tectTerms = [
        
        {
          word: "ASYNCHRONOUS", 
          meaning: "Asynchronous programming is a technique that enables your program to start a\
          potentially long-running task and still be able to be responsive to other events while that\
          task runs, rather than having to wait until that task has finished. Once that task has finished,\
          your program is presented with the result.\
          "
          },{
            word:"BOOLEAN", 
            meaning:"In computer programming, a boolean value is one that can either be TRUE or FALSE.\
            If you need to know yes or no about something, then you would want to use the\
             boolean function. It sounds extremely simple, but booleans are used all the time in\
             programming languages and they are extremely useful.\
            "
          },{
            word:"CHAR", 
            meaning:"Char is a computer science term referring to a single display unit of information equivalent\
            to one alphabetic symbol, digit, or letter.\
            "
          },{
            word:"CONCATENATE", 
            meaning:"It is often necessary to join text strings together in a program to make a new text string.\
            This is called concatenation.\
            "
          },{word: "DATA",
             meaning: "In computing, data is information that has been translated into a form that is efficient for\
             movement or processing.\
             "

          },{
            word:"DATA STRUCTURE", 
            meaning:"A data structure is a specialized format for organizing, processing, retrieving and storing data. \
            "
          },{word:"DATA TYPE",
             meaning: "A data type, in programming, is a classification that specifies which type of value a variable\
             has and what type of mathematical, relational or logical operations can be applied to it without causing an error.\
             "

          },{
            word:"DECLARATION", 
            meaning:"In computer programming, a declaration determines the name and data type of a variable or other element.\
            Programmers declare variables by writing the name of the variable into code, along with any data type indicators\
            and other required syntax.\
            "
          },{
            word:"EXECUTION", 
            meaning:"Execution in computer and software engineering is the process by which a computer or virtual\
            machine reads and acts on the instructions of a computer program. Each instruction of a program is a\
            description of a particular action which must be carried out, in order for a specific problem to be solved.\
            "
          },{
            word:"FLOAT", 
            meaning:"Floating point numbers are decimal values or fractional numbers like 133.5, 2897.11, and 3571.213,\
            whereas real numbers like 56, 2, and 33 are called integers.\
            "
          },{
            word:"FUNCTION", 
            meaning:"A function is simply a \“block\" of code that you can use over and over again, rather than writing \
            it out multiple times. Functions enable programmers to break down or decompose a problem into smaller chunks,\
            each of which performs a particular task.\
            "
          },{
            word:"INFORMATION", 
            meaning:"Information is the processed data on which decisions and actions are based. For the decision\
            to be meaningful, the processed data must qualify for the following characteristics - Timely - Information\
            should be available when required. Accuracy - Information should be accurate.\
            "
          },{
            word:"INTEGER", 
            meaning:"Integers are numbers without a fractional component, and don't support decimal points.\
            "
          },{
            word:"INTERNET", 
            meaning:"The Internet, sometimes called simply \"the Net,\" is a worldwide system of computer networks -- a\
            network of networks in which users at any one computer can, if they have permission, get information from\
            any other computer (and sometimes talk directly to users at other computers).\
            "
          },{
            word:"INVOCATION", 
            meaning:"Invocation means the execution of a program function.\
            "
          },{
            word:"INVOKE", 
            meaning:"Invoke: Invoking (or calling) a function means using its name and passing any required\
            arguments to it, in order to execute its code and return a value (if any). This is typically\
            done within the main program or within other functions, to perform specific tasks or calculations.\
            "
          },{
            word:"OPERATOR", 
            meaning:"An operator in a programming language is a symbol that tells the compiler or interpreter to perform\
            specific mathematical, relational or logical operation and produce final result. For instance, \"x\" is an\
            arithmetic operator that indicates multiplication, while \"&&\" is a logical operator representing\
            the logical AND function in programming.\
            "
      
          },{
            word:"OPERAND", 
            meaning:"An operand represents the data to be operated on or manipulated by some type of operator.\
            "
          },{
            word:"STRING", 
            meaning:"In any computer programming language, a string is a sequence of characters used to represent text.\
            "
          }
          /*{
            word:"CHAR", 
            meaning:"Char is a computer science term referring to a single display unit of information equivalent 
            to one alphabetic symbol, digit, or letter.\
            "
          },
          */
        
          
          
        ];


          var message = "";

          let userInput = document.querySelector(".word-input").value.toUpperCase();
          

        if (userInput) {

            userInput = userInput.trim();

            for (var i = 0; i < tectTerms.length; i++) {

                var userInputTrim = tectTerms[i].word.trim();

                if (userInputTrim === userInput) {

                    message += "<h1>" + tectTerms[i].word + "</h1>";
                    message += "<p>" + tectTerms[i].meaning + "</p>";
                    print(message);
                    
                }
            }

        } 
        

        function print() {
           
            let outPut = document.querySelector(".out-put");
            outPut.innerHTML = message;
        
        }

}



//Functions

{

let x = myFunction(4, 3);
document.querySelector(".function-set1").innerHTML = x;

function myFunction(a, b) {
  return a * b;
}


}


{

    const x = function (a, b) {return a * b};
    document.querySelector(".function-set2").innerHTML = x;
}



{

    const x = function (a, b) {return a * b};
    x(10, 8);
    document.querySelector(".function-set3").innerHTML = x;
}



{

    const x = function (a, b) {return a * b};

    document.querySelector(".function-set4").innerHTML = x(10, 5);
}



{

    const x = function (a, b) {return a * b};
    const xa = x(10, 8);
    document.querySelector(".function-set5").innerHTML = xa;
}





{

    const x = function (a, b) {return a * b};
    const xb = x;
    document.querySelector(".function-set6").innerHTML = xb;
}




{

    const x = function (a, b) {return a * b};
    const xb = x;
    document.querySelector(".function-set7").innerHTML = xb(40, 3);
}


{

    const myFunction = new Function("a", "b", "return a * b");
    document.querySelector(".function-set8").innerHTML = myFunction(4, 3);
}


{
    //Same as above.
    const myFunction = function (a, b) {return a * b}
    document.querySelector(".function-set9").innerHTML = myFunction(4, 3);
}
{
(function () { document.querySelector(".function-set10").innerHTML = "Hello! I called myself";})();
}


{
    
       
        document.querySelector(".function-set11").innerHTML = (function (){} && function (){return 1+8;})();

}


{
    function myFunction(a, b) {
        return a * b;
      }
      let x = myFunction(4, 3);
      document.querySelector(".function-set12").innerHTML = x;
}



{
    function myFunction(a, b) {
        return a * b;
      }
      let x = myFunction(4, 3) * 2;
      document.querySelector(".function-set13").innerHTML = x;
}


{

    function myFunction(a, b) {
        return arguments.length;
      }
      document.querySelector(".function-set14").innerHTML = myFunction(4, 3);
}


{
    function myFunction(a, b) {
        return a * b;
      }
      document.querySelector(".function-set15").innerHTML = myFunction.toString();
}


{

    const x = (x, y) => x * y;
    document.querySelector(".function-set16").innerHTML = x(5, 5);
}


{
    const x = (x, y) => { return x * y };
    document.querySelector(".function-set17").innerHTML = x(5, 5);
}


{
    function myFunction(x, y) {
        if (y === undefined) {
          y = 2;
        }  
        return x * y;
      }
      document.querySelector(".function-set18").innerHTML = myFunction(4);
}


{

    function myFunction(x, y) {
        if (x === undefined) {
          y = x = 5;
        }  
        return y * x;
      }
      document.querySelector(".function-set19").innerHTML = myFunction( );
}



{

    function myFunction(x, y) {
        if (x === undefined) {
          y = 2;
          x = 5;
        }  
        return y * x;
      }
      document.querySelector(".function-set20").innerHTML = myFunction( );
}


{

    function myFunction(x, y = 5) {
        if (x === undefined) {
          x = 5;
        } 
        
        return x * y;  

      }
    document.querySelector(".function-set21").innerHTML = myFunction(6, 2);
    document.querySelector(".function-set22").innerHTML = myFunction(6);
    document.querySelector(".function-set23").innerHTML = myFunction( );
}



{
    function myFunction(x, y = 10) {
        return x + y;
      }
    document.querySelector(".function-set24").innerHTML = myFunction(5);
}



{
    function sum(...args) {
        let sum = 0;
        for (let arg of args) sum += arg;
        return sum;
      }
      
      let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
      
      document.querySelector(".function-set25").innerHTML = x;
}


{
x = findMax(1, 123, 500, 115, 44, 88);

function findMax() {
  let max = -Infinity;
  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] > max) {
      max = arguments[i];
    }
  }
  return max;
}

document.querySelector(".function-set26").innerHTML = x;
}


{
x = sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
}


{
    function myFunction(a, b) {
        return a * b;
      }
      document.querySelector(".function-set27").innerHTML = myFunction(10, 2); 
}


{
    function myFunction(a, b) {
        return a * b;
      }
      document.querySelector(".function-set28").innerHTML = window.myFunction(20, 2); 
      document.querySelector(".function-set29").innerHTML = this.myFunction(40, 2);
}

{
let x = myFunction();
function myFunction() {
  return this;
}

document.querySelector(".function-set30").innerHTML = x; 
}


{
let myObject = {
    firstName:"John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
document.querySelector(".function-set31").innerHTML = myObject.fullName(); 
document.querySelector(".function-set32").innerHTML = myObject.fullName();
}



{
    const myObject = {
        firstName:"John",
        lastName: "Doe",
        fullName: function() {
          return this;
        }
      }
      document.querySelector(".function-set33").innerHTML = myObject.fullName();
}

{
function myFunction(arg1, arg2) {
    this.firstName = arg1;
    this.lastName  = arg2;
  }

  //function invoked with 2 arguements to function parameters and passed to an object
const myObj = new myFunction("John","Doe") 

//Output of object property value passed from myFuntion, John will be the output result.
document.querySelector(".function-set34").innerHTML = myObj.firstName; 
}


{
    const myObject = {
        firstName:"Jay",
        lastName: "Bo",
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      document.querySelector(".function-set35").innerHTML = myObject.fullName();
}


{
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      document.querySelector(".function-set36").innerHTML = person.fullName.call(person1); 
      document.querySelector(".function-set37").innerHTML = person.fullName.call(person2); 
}


{
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + " is from " + city + ", " + country;
        }
      }
      
      const person1 = {
        firstName:"John",
        lastName: "Doe"
      }
      
      const person2 = {
        firstName:"Mary",
        lastName: "Doe"
      }
      
      document.querySelector(".function-set39").innerHTML = person.fullName.call(person1, "Oslo", "Norway"); 
}


{
    const person = {
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const person1 = {
        firstName:"Jay",
        lastName: "Bo"
      }
      
      document.querySelector(".function-set40").innerHTML = person.fullName.apply(person1); 
}


{
    const person = {
        fullName: function(city, country) {
          return this.firstName + " " + this.lastName + " is from " + city + ", " + country;
        }
      }
      
      const person1 = {
        firstName:"Adu",
        lastName: "Baah"
      }
      
      document.querySelector(".function-set41").innerHTML = person.fullName.apply(person1, ["Kumasi", "Ghana"]);
}


{
    
    document.querySelector(".function-set42").innerHTML = Math.max(1,2,3);
    document.querySelector(".function-set43").innerHTML = Math.max.apply(null, [1,2,3]);
    document.querySelector(".function-set44").innerHTML = Math.max.apply(Math, [1,2,3]);
    document.querySelector(".function-set45").innerHTML = Math.max.apply("", [1,2,3]);
    document.querySelector(".function-set46").innerHTML = Math.max.apply(0, [1,2,3]);
    document.querySelector(".function-set47").innerHTML = Math.max.apply(false, [1,2,3]);
    document.querySelector(".function-set48").innerHTML = Math.max.apply(undefined, [1,2,3]);
    document.querySelector(".function-set49").innerHTML = Math.max.apply(true, [1,2,3]);
}



{
    const person = {
        firstName:"John",
        lastName: "Doe",
        fullName: function() {
          return this.firstName + " " + this.lastName;
        }
      }
      
      const member = {
        firstName:"Hege",
        lastName: "Nilsen",
      }
      
      let fullName = person.fullName.bind(member);
      
      document.querySelector(".function-set50").innerHTML = fullName();
      document.querySelector(".function-set51").innerHTML = fullName;
}

{
const person = {
    firstName:"Jay",
    lastName: "Bo",
    display: function() {
      let x = document.querySelector(".function-set52");
      x.innerHTML = this.firstName + " " + this.lastName;
    }
}
  
  person.display();

}


{
    const person = {
        firstName:"Mike",
        lastName: "Sloan",
        display: function() {
          let x = document.querySelector(".function-set53");
          x.innerHTML = this.firstName + " " + this.lastName;
        }
      }
      
      setTimeout(person.display, 3000);
}


{
    const person = {
        firstName:"John",
        lastName: "Doe",
        display: function() {
          let x = document.querySelector(".function-set54");
          x.innerHTML = this.firstName + " " + this.lastName;
        }
      }
      
      let display = person.display.bind(person);
      setTimeout(display, 3000);
}


{
    let counter = 0;

// Function to increment counter
function add() {
  counter += 1;
}

document.querySelector(".function-set55").innerHTML = "The counter is: " + counter;
// Call add() 3 times
add();
document.querySelector(".function-set56").innerHTML = "The counter is: " + counter;
add();
document.querySelector(".function-set57").innerHTML = "The counter is: " + counter;
add();
// The counter should now be 3
document.querySelector(".function-set58").innerHTML = "The counter is: " + counter;
}


{
    let a = 1;
    let b = 2;
    let c = 3;
    let d = 4;

    if ( a == 1) {
        document.querySelector(".function-set59").innerHTML = setTimeout(setTimeout(a, 0), 0) //+ setTimeout(b, 0);
    }

    if ( b == 2) {
        document.querySelector(".function-set60").innerHTML = setTimeout(setTimeout(a, 1000), 1000) //+ setTimeout(b, 1000);
    }

    if ( c == 3) {
        document.querySelector(".function-set61").innerHTML = setTimeout(setTimeout(a, 2000), 2000) //+ setTimeout(c, 2000);
    }

    if ( d == 4) {
        document.querySelector(".function-set62").innerHTML = setTimeout(setTimeout(a, 3000), 3000) //+ setTimeout(d, 3000);
    }



}

{
// Function to increment counter
function add() {
    let counter = 0;
    counter += 1;
    return counter;
  }
  // Trying to increment the counter
  function myFunctionCounter1(){
    document.querySelector(".function-set63").innerHTML = add();
  }

}




{
    document.querySelector(".function-set64").innerHTML = add();
function add() {
  let counter = 0;
  function plus() {counter += 1;}
  plus();  
  return counter; 
}
}





{
    const add = (function () {
        let counter = 0;
        return function () {counter += 1; return counter;}
      })();
      
      function myFunctionCounter2(){
        document.querySelector(".function-set65").innerHTML = add();
      }

    }



{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
      }
      
      const myCar1 = new Car("Ford", 2014);
      const myCar2 = new Car("Audi", 2019);
      
      document.querySelector(".class-set1").innerHTML =
      myCar1.name + " " + myCar2.name;
}



{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
      
        }
        age() {
          const date = new Date();
          return date.getFullYear() - this.year;
        }
      }
      
      const myCar = new Car("Ford", 2014);
      document.querySelector(".class-set2").innerHTML =
      "My car is " + myCar.name + ", it is " + myCar.age() + " years old.";
}



{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
        }
        age(x) {
          return x - this.year;
        }
      }
      
      const date = new Date();
      let year = date.getFullYear();
      
      const myCar = new Car("Ford", 2014);
      document.querySelector(".class-set3").innerHTML=
      "My car is " + myCar.age(year) + " years old.";
}


{
    class Car {
        constructor(name, year) {
          this.name = name;
          this.year = year;
      
        }
        age() {
         // date = new Date();  // This will not work
         const date = new Date(); // This will work
         return date.getFullYear() - this.year;
        }
      }
      
      const myCar = new Car("Ford", 2014);
      document.querySelector(".class-set4").innerHTML =
      "My car is " + myCar.age() + " years old.";
}



{
    class Car {

        constructor(brand) {
          this.carname = brand;
        }

        present() {
          return 'I have a ' + this.carname;
        }

      }
      
      class Model extends Car {

        constructor(brand, mod) {
          super(brand);
          this.model = mod;
        }

        show() {
          return this.present() + ', it is a ' + this.model;
        }

      }
      
      let myCar = new Model("Ford", "Mustang");
      document.querySelector(".class-set5").innerHTML = myCar.show();
}


{
    class Car {
        constructor(brand) {
          this.carname = brand;
        }
        get cnam() {
          return this.carname;
        }
        set cnam(x) {
          this.carname = x;
        }
      }
      
    const myCar = new Car("Ford");
      
    document.querySelector(".class-set6").innerHTML = myCar.cnam;
}


{
    class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }
      
      const myCar = new Car("Ford");
      
      document.querySelector(".class-set7").innerHTML = myCar.carname;
}


{
    class Car {
        constructor(brand) {
          this._carname = brand;
        }
        get carname() {
          return this._carname;
        }
        set carname(x) {
          this._carname = x;
        }
      }
      
      const myCar = new Car("Ford");
      myCar.carname = "Volvo";
      document.querySelector(".class-set8").innerHTML = myCar.carname;
}


{
    //You cannot use the class yet.
//myCar = new Car("Ford") will raise an error.

class Car {
    constructor(brand) {
      this.carname = brand;
    }
  }
  
  //Now you can use the class:
  const myCar = new Car("Ford");
  document.querySelector(".class-set9").innerHTML = myCar.carname;
}


{
    class Car {
        constructor(name) {
          this.name = name;
        }
        static hello() {
          return "Hello!!";
        }
      }
      
      const myCar = new Car("Ford");
      
      //You can call 'hello()' on the Car Class:
      document.querySelector(".class-set10").innerHTML = Car.hello();
      
      // But NOT on  a Car Object:
      // document.getElementById("demo").innerHTML = myCar.hello();
      // this will raise an error.
}


{
class Car {

    constructor(name) {
      this.name = name;
    }

    static hello(x) {
      return "Hello " + x.name;
    }

  }
  
  const myCar = new Car("Ford");

  document.querySelector(".class-set11").innerHTML = Car.hello(myCar);
}


{
    function myDisplayer(some) {
        document.querySelector(".async-set1").innerHTML = some;
      }
      
      function myFirst() {
        myDisplayer("Hello");
      }
      
      function mySecond() {
        myDisplayer("Goodbye");
      }
      
      myFirst();
      mySecond();
}


{
    function myDisplayer(some) {
        document.querySelector(".async-set2").innerHTML = some;
      }
      
      function myFirst() {
        myDisplayer("Hello");
      }
      
      function mySecond() {
        myDisplayer("Goodbye");
      }
      
      
      mySecond();
      myFirst();
}



{
    function myDisplayer(some) {
        document.querySelector(".async-set3").innerHTML = some;
      }
      
      function myCalculator(num1, num2) {
        let sum = num1 + num2;
        return sum;
      }
      
      let result = myCalculator(5, 5);
      myDisplayer(result);
}


{
    function myDisplayer(some) {
        document.querySelector(".async-set4").innerHTML = some;
      }
      
      function myCalculator(num1, num2) {
        let sum = num1 + num2;
        myDisplayer(sum);
      }
      
      myCalculator(5, 5);
}

{
    function myDisplayer(something) {
        document.querySelector(".async-set5").innerHTML = something;
      }
      
      function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
      }
      
      myCalculator(5, 5, myDisplayer);
}


{
    // Create an Array
const myNumbers = [4, 1, -20, -7, 5, 9, -6];

// Call removeNeg with a Callback
const posNumbers = removeNeg(myNumbers, (x) => x >= 0);

// Display Result
document.querySelector(".async-set6").innerHTML = posNumbers;

// Remove negative numbers
function removeNeg(numbers, callback) {
  const myArray = [];
  for (const x of numbers) {
    if (callback(x)) {
      myArray.push(x);
    }
  }
  return myArray;
}
}




{
  function myDisplayer(something) {
    document.querySelector(".async-set7").innerHTML = something;
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(10, 10, myDisplayer);
}



{
  setTimeout(myFunctionTO1, 3000);

  function myFunctionTO1() {
    document.querySelector(".async-set8").innerHTML = "I appear on page 3 seconds after web page load!!";
  }
}


{
  setTimeout(function() { myFunctionTO2("I also appear 6 seconds after web page load !!!"); }, 6000);

function myFunctionTO2(value) {
  document.querySelector(".async-set9").innerHTML = value;
}
}


{
  setInterval(myFunctionTO3, 1000);

function myFunctionTO3() {
  let d = new Date();
  document.querySelector(".async-set10").innerHTML=
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds();
}
}


{
  function myDisplayer(some) {
    document.querySelector(".async-set11").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {

    let x = 0;
  
  // some code (try to change x to 5)
  
    if (x == 0) {
      myResolve("OK");
    } else {
      myReject("Error");
    }
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
}



{
setTimeout(function() { myFunctionTO4("I appear 3 seconds after page load !!!"); }, 3000);

function myFunctionTO4(value) {
document.querySelector(".async-set12").innerHTML = value;
}
}


{
  const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ myResolve("I appear after 3 seconds !!"); }, 3000);
  });
  
  myPromise.then(function(value) {
    document.querySelector(".async-set13").innerHTML = value;
  });
}


{

  function myDisplayer(some) {
    document.querySelector(".async-set14").innerHTML = some;
  }
  
  let myPromise = new Promise(function(myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mylaptop.html");
    req.onload = function() {
      if (req.status == 200) {
        myResolve(req.response);
      } else {
        myReject("File not Found");
      }
    };
    req.send();
  });
  
  myPromise.then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );

}


{
  function myDisplayer(some) {
    document.querySelector(".async-set15").innerHTML = some;
  }
  
  async function myFunctionTO5() {return "Hello Promise1";}
  
  myFunctionTO5().then(
    function(value) {myDisplayer(value);},
    function(error) {myDisplayer(error);}
  );
}


{
  function myDisplayer(some) {
    document.querySelector(".async-set16").innerHTML = some;
  }
  
  async function myFunctionTO6() {return "Hello Promise2";}
  
  myFunctionTO6().then(
    function(value) {myDisplayer(value);},
  );
}


{
  async function myDisplay() {

    let myPromise = new Promise(function(resolve, reject) {
      resolve("I love You !!");
      
    });
    
    document.querySelector(".async-set17").innerHTML = await myPromise;
  }
  
  myDisplay();
}



{
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      resolve("I love You !!");
    });
    document.querySelector(".async-set18").innerHTML = await myPromise;
  }
  
  myDisplay();
}



{
  async function myDisplay() {
    let myPromise = new Promise(function(resolve) {
      setTimeout(function() {resolve("I love You !!");}, 3000);
    });
    document.querySelector(".async-19").innerHTML = await myPromise;
  }
  
  myDisplay();
}



{
  async function getFile() {
    let myPromise = new Promise(function(resolve) {
      let req = new XMLHttpRequest();
      req.open('GET', "mycamera.html");
      req.onload = function() {
        if (req.status == 200) {
          resolve(req.response);
        } else {
          resolve("File not Found");
        }
      };
      req.send();
    });
    document.querySelector(".async-set20").innerHTML = await myPromise;
  }
  
  getFile();
}



/*
{

const x = document.querySelector(".async-set21");

function getLocation() {
  try {
    navigator.geolocation.getCurrentPosition(showPosition);
  } catch {
    x.innerHTML = err;
  }
}


function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
  "<br>Longitude: " + position.coords.longitude;
}

getLocation();
}


{

const myElement = document.querySelector(".async-set22");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    myElement.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  myElement.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}

getLocation();

}
*/


{

  function myFunctionTO7() {
    const inpObj = document.querySelector("#id1");
    if (!inpObj.checkValidity()) {
      document.querySelector("#async-set23").innerHTML = inpObj.validationMessage;
    } else {
      document.querySelector("#async-set23").innerHTML = "Input OK";
    } 
  } 
}




{
  function myFunctionTO8() {

    let text;

    if (document.querySelector("#id2").validity.rangeOverflow) {

      text = "Value too large";
    } else {
      text = "Input OK";
    } 

    document.querySelector("#async-set24").innerHTML = text;
  }
}




{
  function myFunctionTO9() {
    let text;
    if (document.querySelector("#id3").validity.rangeUnderflow) {
      text = "Value too small";
    } else {
      text = "Input OK";
    } 
    document.querySelector("#async-set25").innerHTML = text;
  }
}


{
function myFunctionTO10() {
  window.history.back();
}
}


{
  function myFunctionTO11() {
    window.history.forward();
  }
  }



  {
    let origin = window.location.origin;
    document.querySelector(".async-set26").innerHTML = origin;
  }

  {
    let origin = location.origin;
    document.querySelector(".async-set27").innerHTML = origin;
  }


{
let file = "fetch_info.txt"

fetch (file)
.then(x => x.text())
.then(y => document.querySelector(".async-set28").innerHTML = y);
}
  
{
getText("fetch_info.txt");

async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  document.querySelector(".async-set29").innerHTML = y;
}
}


{
getText("fetch_info.txt");

async function getText(file) {
  let myObject = await fetch(file);
  let myText = await myObject.text();
  document.querySelector(".async-set30").innerHTML = myText;
}
}
































































































































































































































































































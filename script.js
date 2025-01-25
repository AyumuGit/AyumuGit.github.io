0; // This is a comment, javascript will not execute this text
4567895; // This is a valid value
56788.329847; // This is also a valid value, often called a float
Infinity; // This is also valid, litteraly defined as a value of infinity
-98654;
-Infinity;
-0;


var cat; // Declares variable to store in memory

cat = 10; // Defines with a data type with value of 5

var Cat = 32; // Semicolon ends statement, line contains both definition and declaration

console.log(cat);
console.log(Cat);

cat = Cat; // The = opperator assigns data value to another from right to left

console.log(cat);

var dog; // Declared variable with undefined value 
console.log(dog);

var prose = 'lkasdjf;ajwef ie hello world'; // ' and " are interchangable string delimeters
var moreprose = "lasjjdslajfjad"; // You cannot mix ' and " when delimiting however
// If you don't end off the delimiter, any code afterwards would be taken as string characters

// Booleans are either true or false

var x = true;
x = false;

// Side Note - Keynames(Noted in Darker Blue) cannot be declared as a variable name

// Objects
var ball = {}; // An empty object
ball = null; // Null is a datatype in JS similar to undefined
// Often seen when searching webpage with something such as document.getElementById and is returned when the searched term is not found

// Operators
5 + 5;
cat = 5 + 5;
var cat; // Variable was redeclared, currently undefined

cat = 5 + "5"; // String concatenation operator
console.log(cat); // Different Datatypes, easier to convert number to string, now reads as 55 

console.log(cat + "oqiuwoihfnonvhfqoihefo");

var script = "All outputs above are from the console.log function, producing results discussed in the second week of class!";
console.log(script);
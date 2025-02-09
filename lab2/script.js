var leo = { //Empty object evaluates as true
    cute: true,
    hungry: 0.8,
    lives: 9,
    fur: {
        fluffy: true,
        colour: "red",
    },
    threats: null,
    meow: function (){  // A function contained as a key value pair of an object is called a method
        return "meow";
    }, // annoynymous functions have no name, works because the name was declared prior
}; 

console.log(leo.meow()); // ()function invokation operator
// (Object, accessor, name, invokation operator); Method of the console object

console.log(leo.sleeping);
// variable name that is not declared will result in error
// An undeclared parameter of an object gives undefined and no error

leo.lives++;
console.log(leo);

leo.two = "two"; // Object are changeable and mutable (you can add to them after they are created)
console.log(leo);

// leo.travel(); < An error because you can't invoke undefined as a function

console.log(leo.future++); // Results in a type number with value "NaN" which is Not A Number

console.log(leo.lives / null);
// null gets coerced to 0 when changing to type number


// functions in javascript are also objects
// . is the accessor of an objects

leo.fur.fluffy;

if (leo.cute) {      
    console.log("true?");
} else {
    console.log("false?");
}

for(key in leo){ // generics
    console.log(key);
    leo[key]; // An alternate accessor for objects in Javascript
    // leo["meow" + count];
}

/*
var x = {};
x.y = 12; // Mutates object with assignment
x.z; // Returns undefined
x.z() // Results in an error due to invoking undefined as a function
x.z = function(){}; // < Method
x.z(); // Invokes the z method and returns undefined unless modified
*/
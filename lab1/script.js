var billy; //Declared variable, nothing defined for it

console.log(billy); //Will output undefined

billy = 13;
billy = 'billy is great';
billy = 'billy said "hello"';

// Keyword, Expression, Codeblock
if(true){
    console.log(billy);
}

if(15 > 15){
    console.log('is it true?');
}

billy = "silly"; //If empty string, it will read as false
if(billy ){ //coercion: changing a string to a boolean
    console.log('billy is silly');
}

if(billy === 'silly'){ // === tests for equal value and same type
    console.log('really silly');
}

// == tests for equal value but allows for coersion(convertion of different types)
// billy == true
// billy gets coerced to a boolean, expression reads true

// typeof operator preceeds a variable name or literal value

console.log(typeof "lsdjflsjdflsdjf"); // reads as string
console.log(typeof billy); // reads as string

if(typeof billy === "string"){
    billy = 'sl dkjfaqoeoihwq';
}else{
    billy = 42;
}

///////////////
// for loop

for(var i = 0; i < 5; i++){
    if (i === 10) { break; } //personal inclusion as backup to break counter and prevent crash (no idea if it works)
    console.log('hello'); // Outputs hello 5 times
}

for(var i = 0; i < 10; i++){
    console.log(i) // Outputs numbers 0-9
}
console.log(i); //Outputs 10
////////

function bob(){ //Function was declared but not run
    console.log('I am Bob');
    return 'bob'; //Returns as "undefined" by default, override by adding your own return definition
}

// function invocation
bob(); /// () function invokation operator

/*
Multi Line Comment, by commenting out code, you can keep code in the file without running it
*/
for(var i = 0; i < 10; i++){
    bob();
}

console.log( bob() );

function charlie(data){ // Sets parameters for function
    data = data + 100;
    return data;
}

var mydata = charlie(50);
console.log(mydata);
console.log( typeof mydata ); //Outputs number

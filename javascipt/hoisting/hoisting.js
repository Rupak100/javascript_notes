// console.log(myVar()); // Function call works because it's hoisted

var myVar; 

function myVar() {
    return "I am a function";
}

console.log(myVar()); 

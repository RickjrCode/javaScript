let truthy = true;
// declaring a variable (truthy) in which its value is true
if (truthy) {
  console.log("true"); //if true, console log 'true'
} else {
  // else console log false
  console.log("false");
} // output: true

let isFalse = false;
// declaring a variable (isFalse) in which its value is false
if (isFalse === false) {
  console.log("The boolean value false is falsy");
} else {
  //if the variable is equal to being false, console log "the boolean value false is falsy"
  console.log("The boolean value is truthy");
} //else console log "the boolean value is truthy"

let iAm = "I am a string";
// "I am a string " is truthy because it is a string, strings are truthy
if (iAm) {
  console.log("true");
} else {
  console.log("falsy");
}

let myValue = null;

if (myValue === null) {
  console.log("The null value is falsy");
} else {
  console.log("The null value is !== null");
}

let noValue = undefined;

if (noValue) {
  console.log("undefined is falsy");
} else {
  console.log("undefined is truthy");
}

let zero = 0;
if (zero === 0) {
  console.log("the number zero is falsy (the only falsy number)");
} else {
  console.log("the number 0 is truthy");
}

let nothingHere = ""; //an empty string is falsy, always.

if (nothingHere) {
  console.log("This empty string is truthy");
} else {
  console.log("The empty string is falsy (the only falsy string)");
}

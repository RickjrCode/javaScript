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

// examples with a function
function check(value) {
  // declare a function and add value parameter
  return !!value; // return the value back by the function using !! which is used to convert the value to its boolean equivalent
}

console.log(check(true)); // true is the argument we want to pass onto the function
console.log(check("I am a string"));
console.log(check(false));
console.log(null);
console.log(check(undefined));
console.log(check(0));
console.log(check(""));

//practice with functions for Number line
function addNum(a, b) {
  // declaring addNum as a function holding two numbers
  const sum = a + b; // the sum will equal one number added to another
  if (sum < -1000) {
    // if the sum of those two numbers are less than -1000
    console.log(`${sum} is less than -1000`); //console log
  } else {
    console.log(`${sum} is greater than or equal to -1000`); //else console log
  }
}

addNum(5, -1008); //output: -1003 is less than -1000

function addNum(a, b) {
  const sum = a + b;
  if (sum < 0) {
    console.log(`${sum} is a negative number`);
  } else {
    console.log(`${sum} is not a negative number`);
  }
}

addNum(-1000, 0); //output: -1000 is a negative number
addNum(-5, 0); //output -5 is a negative number

function addNum(a, b) {
  const sum = a + b;
  if (sum === 0) {
    console.log(`${sum} is equal to zero`);
  } else {
    console.log(`${sum} is not equal to zero`);
  }
}

addNum(-9, 9); //output: 0 is equal to zero

function addNum(a, b) {
  const sum = a + b;
  if (sum > 0) {
    console.log(`${sum} is larger than zero`);
  } else {
    console.log(`${sum} is less than zero`);
  }
}

addNum(99, -2); //output: 97 is larger than zero
addNum(0, 100);

function addNum(a, b) {
  const sum = a + b;
  if (sum > 100) {
    console.log(`${sum} is greater than 100`);
  } else {
    console.log(`${sum} is less than 100`);
  }
}

addNum(50, 51); //output: 101 is greater than 100
addNum(25, 30); //output: 55 is less than 100

function find2Nums(num1, num2) {
  //declare a function where the parameters holds two number values
  if (num1 >= 5 && num2 >= 5) {
    // if both number values are greater than or equal to five
    console.log("true"); // console log
  } else {
    console.log("false"); // else console log
  }
}

find2Nums(5, 6); // output: "true"
find2Nums(10, 11); // output: "true"
find2Nums(0, 0); // output: "false"
find2Nums(1000, -1000); // output: "false"
find2Nums(6, 4); // output: "false"
find2Nums(5, 5); // output: "true"

function pairComp(param1A, param1B) {
  // declare a function that holds two values(strings)
  if (param1A || param1B) {
    // compare both values and check if at least one is truthy
    console.log("true"); // if truthy console log
  } else {
    // else console log
    console.log("false");
  }
}

const param1A = "cat"; // let the string cat = param1A
const param1B = "cat"; // let the string cat = param1B
// output: "true"

pairComp(param1A, param1B);

// example of a function where I can compare multiple values and or strings
function checkSets(set1, set2) {
  if (set1 || set2) {
    //if at least one of the sets of values are true, console log "true"
    console.log("true");
  } else {
    console.log("false");
  }
}

const setA = ("cat", "cat");
const setB = (6, "6");
checkSets(setA, setB); //output: true

const setC = ("five", 5);
const setD = ("dog", "dawg");
checkSets(setC, setD); //output: true

const setE = (0, false);
const setF = ("horse", "horse");
checkSets(setE, setF); //output: true

const setG = ("eight", "eight");
const setH = ("ate", "ate");
checkSets(setG, setH); //output: true

const setI = (11, "eleven");
const setJ = ("four", "for");
checkSets(setI, setJ); //output: true

const setK = ("cake", "cake");
const setL = ("pie", "pie");
checkSets(setK, setL); //output: true

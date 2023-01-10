/*
Strict Mode:
Don't allow JS to fail silently
*/
'use strict'; // has to be the first line of CODE for each script
/*
//The following code will fail in strict mode
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true; // wrong variable name
if (hasDriversLicense) console.log('I can drive :D');
*/

// This will also fail in strict mode
/*
const interface = 'Audio';// strict mode reserves keyword used in future versions
*/

//FUNCTION DECLARATION
function logger() {
    console.log("My name is Lucas");
}
logger();//calling/running/involke the functions

function fruitProcessors(apples, oranges) {
    // console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}
console.log(fruitProcessors(5, 0));

let expNmb = Number('23');//also a function call

//FUNCTION EXPRESSION
// RHS of the following code is a expression (head explode)
let calcAge1 = function (birthYear, now) {
    return now - birthYear;
}
const ca1 = calcAge1(1991, 2023);
console.log(ca1);

//ARROW FUNCTION, added in ES6, a simpler function expression
// arrow function doesn't get a this keyword, unlike a regular function
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
const calcAge2 = birthyear => 2023 - birthyear;
const calcAge3 = (birthYear, now) => now - birthYear;
const calcRetirement = birthyear => {
    const age = 2023 - birthyear;
    const retirment = 65 - age;
    return retirment;
}
console.log(calcAge2(1991));
console.log(calcAge3(1991, 2023));
console.log(calcRetirement(1991));
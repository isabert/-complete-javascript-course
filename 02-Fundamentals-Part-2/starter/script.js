/*
Strict Mode:
Don't allow JS to fail silently
*/
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
'use strict'; // has to be the first line of CODE for each script
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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

//arrays

const friendsArray = ['Michael', 'Steven', 'Peter'];
console.log(friendsArray[0]);
friendsArray[2] = 'Jay';// only primative const values is immutable

console.log(friendsArray);
/*
// This is not allowed because of the const keyword
friendsArray = ['Bob', 'Alice']; 
*/
const numArray = new Array(1, 2, 3);
console.log(numArray.length);

const jonasArray = ['Jonas', calcAge3(1991, 2023), friendsArray]; //elements in the array can have different types
console.log(jonasArray);

// Add elements
let newLength = friendsArray.push("Jessica"); // add to the end of array
newLength = friendsArray.unshift("John"); // add to the beginning of the array

//remove elements
let element = friendsArray.pop();//remove from end,Jessica
element = friendsArray.shift();//remove from beginning,John

let friend_idx = friendsArray.indexOf("Steven");//returns first index
console.log(friend_idx);
friend_idx = friendsArray.indexOf("Bob");//returns -1 if not found
console.log(friend_idx);

console.log(friendsArray.includes("Steven"));//returns boolean 

//Object: aka Dictionary/Map
const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true,
    calcbirth: function () {
        this.birthYear = 2037 - this.age;//this: getting values from object
        return this.birthYear;
    },
    sayHi: function (greetings) {
        return `${this.firstName} ${this.lastName} says :"${greetings}"`;
    },
    canDrive: function () {
        return `${this.firstName} ${this.lastName} ${this.hasDriversLicense ? "can" : "can't"} drive`;
    }
};

//dot notation
jonas.firstName;//jonas.<property>

//bracket notation
const nameType = 'first';
jonas[nameType + 'Name'];//jonas[expression]

//dot vs bracket
const jonasProperty = 'age';
jonas.jonasProperty; //undefined
jonas[jonasProperty];//46

//add element in object
jonas.location = "nowhere";
jonas['likes'] = 'Jessica';

//call function in object
jonas.calcbirth();
console.log(jonas.sayHi("Hi"));
console.log(jonas.canDrive());

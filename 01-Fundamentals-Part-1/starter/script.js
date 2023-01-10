let js = "really amazing";
if (js === "really amazing") {
    alert(`Javascript is ${js}!`); //use `` and ${} to format
    alert("It's a lot of fun!");//strings can be in single or double quotes
}


40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);

/*
javascript automatically determines the datatype.(dynamic typing)
datatype of a var can change automatically
*/

let firstName = "Matilda"; //Camel case,JS convention
let PI = 3.14; //const in capital

// _ and $ are allow in identifier
let _function = 27.7;
let $function;
let funct = true;

console.log(typeof funct); //determines the type of variables
funct = "TRUE";
console.log(typeof funct); //dynamic typing

console.log(typeof 'Jonas');//type string
console.log(typeof 23);//type number

console.log($function); //undefined
console.log(typeof $function);//type: undefined
console.log(typeof null); //!!!!!!!!!!!! IS ACTUALLY object, common bug


// let vs var vs const
//let mutate/reassign
let age = 30; age = 31;

//const, cannot reassign/mutate, can't be EMPTY
const birthYear = 1991;
console.log(`his birthyear is ${birthYear} and he is now ${age} years old`);
console.log('his birthyear is ${birthYear} and he is now ${age} years old');
//ERROR: const birthDay;

//var: completed AVOID in modern code, prior to ES 6
var myJob = "programmer"

//2**3 = 2 power 3 = 8
//46/10 = 4.6
//string concatination: string1+string2+" "+ string3
//typeof
//++,--,+=,-=,*=,/=
let data = 8;
data /= 3;
console.log(data);

//>,<,>=,<=,
const is18 = data >= 18;

//console in broswer has access to all variable in script

/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table
*/
let x, y;
x = y = 25 - 10 - 5;//- has precedence 14, = has precedence 2
console.log(x, y);//10,10

firstName = "Jonas";
x = 1991;
y = 2022;
const jonas = "I'm" + firstName + ", my age is " + (y - x);// use "" when sentence involve '

const jonas2 = `I'm ${firstName}, my age is ${y - x}`;//template string
const jonas3 = `Just a regular string using template strings`;

const tabString1 = "string with \n\
multiple lines\n\
"; // \n is tab \<space> is a bug JS

const tabString2 = `
string with
multiple lines
`; // template string allows multi lines strings

if ((y - x) > 18) {
    console.log(tabString1);
}
else {
    console.log(tabString2)
}

//type conversion
const yearStr = "1991";
const yearNum = 1991;
console.log(Number(yearStr), yearStr);//number, string
console.log(yearStr + 18); //199118
console.log(Number("Jonas"));//NaN, type NaN = number

console.log(String(yearNum));//convert number to string

//type coercion
console.log('I\'m ' + 23 + ' years old');//+ converts number to string, same things happening in template literals

console.log('23' + '10' + 3); //23103, + converts number to strings
console.log('23' - '10' - 3); //10, - converts strings to numbers
console.log('23' * '2'); //46, * converts strings to numbers
console.log('23' / '10'); //2.3, / converts strings to numbers

1 + '1' - 1;//10
2 + 3 + 4 + '5'; //95
'10' - '4' - '3' - 2 + '5'; //15

//falsy values: not false, but will becomes false under boolean conversion
//0,'',undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(""));

//truthy values: everything else other than falsy values and false
console.log(Boolean("Jonas"));

//No need to explicitly convert falsy values to false
let val = NaN;
if (!val) console.log(`${val} is falsy`);
else console.log(`${val} is truthy`);

//!!! 0 is falsy, but is a valid input in many cases(i.e grade)

const adultAge = 18;
const age1 = 19;
const ageNum = 18;
const ageStr = '18';
// equality, == vs ===
//== performs type coersion. != is not ==
adultAge == age1; //false
adultAge == ageStr; //TRUE
adultAge == ageNum;//true

//=== does NOT perform type coersion, perferred in JS
//!== is not ===, perferred in JS
adultAge === age1; //false
adultAge === ageStr; //FALSE
adultAge === ageNum;//true

//get input
const getNumString = prompt("favorate number?");//23
console.log(typeof getNumString);//getVal is a STRING
const getNumber = Number(prompt("favorate number?"));//23 is now a string

if (getNumber === 7) console.log('7 is a cool number');
else if (getNumber !== 7 && getNumber === 23) console.log('23 is also a cool number');

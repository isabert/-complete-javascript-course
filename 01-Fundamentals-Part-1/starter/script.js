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




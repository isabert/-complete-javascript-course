// Remember, we're gonna use strict mode in all scripts now!
'use strict';


// PROBLEM 1:
//What is temp amplitude? Answer: difference between highest and lowest temp

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function () {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    let unfilteredMax = Math.max(...temperatures); // return NaN
    let unfilteredMjn = Math.min(...temperatures);// return NaN
    // use Array's filter
    // https://stackoverflow.com/questions/45643427/remove-nan-from-an-array
    const numTemp = temperatures.filter(function (value) {
        // // There are 2 possible answers
        // return !Number.isNaN(Number(value));// Number("error") is NaN
        return typeof value === 'number';
    });
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    console.table(temperatures);
    const measureKelvin = function () {
        const measurement = {
            type: 'temp',
            unit: 'celsius',

            // C) FIX
            // value: Number(prompt('Degrees celsius:')),
            value: 10,
        };

        // B) FIND
        console.table(measurement);

        // console.log(measurement.value);
        // console.warn(measurement.value);
        // console.error(measurement.value);

        const kelvin = measurement.value + 273;
        return kelvin;
    };
    measureKelvin();
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let res = Math.max(...numTemp) - Math.min(...numTemp);
    return res;
};
console.log(calcTempAmplitude());

// PROBLEM 2:
// Function should now receive 2 (number) arrays of temps
const calc2TempAmplitude = function (temp1, temp2) {
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    debugger;// add break point here
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let temp = temp1.concat(temp2); // return new list
    return Math.max(...temp) - Math.min(...temp);
};

console.log(calc2TempAmplitude([3, 5, 1], [9, 0, 5]));
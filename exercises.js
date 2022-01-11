// --------------------- courses !wesbos javascript 30 array cardio day 1 and 2 if u finish everytthing!
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

// function x(str, i) {
//     let arr = []
//     for(let y = 0; y < i; y++) {
//         arr.push(str);
//     }
//     console.log(arr);
// }

// x('sunshine', 3);








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------

// function y(arr) {
//     let arr2 = []
//     for(let i = arr.length - 1; i >= 0; i--) {
//         arr2.push(arr[i]);
//     }
//     console.log(arr2);
// }

// y([1,2,3]);






// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------


// function z(arr) {
//     for(let i = 0; i < arr.length; i++) {
//         if (arr[i] != true) {
//             arr.splice(i + 1, 1);
//         }
//     }
//     console.log(arr);
// }

// z([1,2,undefined]);





// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------


// function a(arr) {
//     const obj = {};
//     for(let i = 0; i < arr.length; i++){
//         obj[arr[i][0]] = arr[i][1];
//     }
//     console.log(obj);
// }

// a([['name', 'Charlie'], ['color', 'brown'], ['age', 10]]);





// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------

// function b(arr) {
//     const newSet = new Set(arr);
//     arr = [...newSet];
//     console.log(arr);
// }

// b([1,1,1,1,2,3,4,4,5]);






// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------



function c(arr1, arr2) {
    let num1 = 0;
    let num2 = 0;
    for(i = 0; i < arr1.length; i++) {
        num1 += arr1[i];
    }
    for(i = 0; i < arr2.length; i++) {
        num2 += arr2[i];
    }

    if(num1 == num2) {
        console.log(true);
    } else {
        console.log(false);
    }
}

c([1,2,3,3], [1,2,3,4]);




// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------

//Got stuck my first go through, will attempt again once I complete codewars.







// -----------------------------------------------

// ---------------------
// Define a function that takes an array and splits it into parts of size i
// ([1, 2, 3, 4], 2) should return [[1, 2], [3, 4]]
// ([1, 2, 3, 4, 5], 3) should return [[1, 2, 3], [4, 5]]
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------

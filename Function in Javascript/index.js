//Function in Javascript
/*
a function is a block of code that is designed to perform a particular task when something invokes it.
*/ 

//Basic example of function
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet("Mariane"));

//Recursion in Javascript
//Recursion is a technique in which a function calls itself.

function factorial(n) {
    //Base case: if n is 0, return 1
    if (n === 0) {return 1;

    }

// Recursive case: n * factorial(n-1)
return n * factorial(n - 1);
}
console.log(factorial(3));

//the factorial function calls itself with n - 1 until it reaches the base case of n = 0.
//when n is 0, the function returns 1.


//Complex example of function

function sumArray(arr) {
    let sum = 0;
    for (let element of arr) {
        if (Array.isArray(element)) {
            sum += sumArray(element); // Recursive call for nested arrays
        } else {
            sum += element;
        }
    }
    return sum;
}

const nestedArray = [1, [2, [3, 4], 5], 6];
console.log(sumArray(nestedArray)); // Output: 21



//[RECURSION]
// JaveScript recursive function is a function that calls itself until it doesn't. This technique is called recursion.


function recurse() {
    // ...
    recurse();
    //
}

function recurse() {
    if(condition) {
        // stop calling itself
        //...
    } else {
        recurse();
    }
}

//1. Suppose that you need to develop a function that counts down from a specified number to 1.  For example, to count down from 3 to 1:

/*
    3
    2
    1 
*/

/*How the script works:

-First, assign the countDown function name to the variable -newYearCountDown.
-Second, set the countDown function reference to null.
-Third, call the newYearCountDown function. */

let countDown = function f(fromNumber) {
    console.log(fromNumber);

    let nextNumber = fromNumber - 1;

    if (nextNumber > 0) {
        f(nextNumber);
    }
}


let newYearCountDown = countDown;
countDown = null;
newYearCountDown(5);

//2. Calculate the sum of n natural numbers example
function sum(n) {
    if (n <= 1) {
        return n;
    } else {
        return n + sum(n - 1);
    }
}
console.log(sum(4));
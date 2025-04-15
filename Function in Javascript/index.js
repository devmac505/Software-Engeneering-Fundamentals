//Function in Javascript
/*
a function is a block of code that is designed to perform a particular task when something invokes it.
*/ 

//Basic syntax
function functionName(parameters) {
    // code to execute
    return result;
}


//Basic example of function but it use template literals  ${name}
function greet(name) {
    return `Hello, ${name}`
}
console.log(greet("Mariane"));

//Create another example on my own 

function sayBye (name) {
    return `BYE BYE, ${name}`
}
console.log(sayBye("Mark"));
 
//Now lets try to using concatenation by using + sign
//(name) is the parameter we use.  Its like saying. Hey this function needs a value to I called name while inside the function 
// then we call an argument to add a value 
function saySorry(name){
    return "Sorry," + name;
}
console.log(saySorry(" Mika"))


//[EXPERIMENT]
//Now lets try comparison function but in our own and try if we can build trough our own logic.
// function isEven(num) 
//     if(num / 2 ){
//     return `This is even number ${num}`
// } else {                                         //I THINK WE HAVE ERROR HERE BUT I TRY TO CREATE USING OUR PREVIOUS TOPIC LOL:)
//     return `This is not an even number ${num}`  //SO KNOW LET FIND OUT WHAT IS MISSING IN OUR CODE OR THE ERROR 
// }
// console.log(isEven(8));

//[DEBUG TIME !!!]
function isEven1 (num){
    if(num % 2 === 0){ //here we got the problem because any number  dived by 2 even have a remainder always return truthy that is make sense right.
        return `This is an Even Number ${num}`
    }else {
        return `This is Odd Number ${num}`
    }
}
console.log(isEven(8));

// Now it is functional but the output look a little bit weird, output sample 'This is an Even Number 8' what if we make the number first then the string that look like this 8 is an even number. lets try it

function isEven2(num) {
    if(num % 2 ===0) {
        return `${num} is an even number` 
    }else {
        return `${num} is an odd number`
    }
}
console.log(isEven(3));









// ✅ Basic & Useful Examples:

// Function Name	                     What It Does

// greet(name)	                         Greets the person by name
// add(a, b)	                         Adds two numbers
// multiply(a, b)                        Multiplies two numbers
// isEven(num)	                         Checks if a number is even
// getAgeInMonths(ageInYears)	         Converts age in years to months
// sayBye(name)	                         Says goodbye to a person


//Function Declaration 
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));


//Function Expression 
const subtract = function(a, b) {
    return a - b;
};
console.log(subtract(5, 2));


//Arrow Function 
const multiply = (a, b) => a * b;
console.log(multiply(2, 3));




//Anonymous Function 

setTimeout(function() {
    console.log("This runs after 2 seconds");
}, 2000);



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
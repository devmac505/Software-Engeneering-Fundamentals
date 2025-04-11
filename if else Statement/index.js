//Conditional statement allow you to execute specific code based on a condition.

//[if Statement]
//if statement is used to execute a block of code if a condition is true.

/*  if (condition) {
    //block of code to be executed if the condition is true
  }

  */
//sample problem

let num = 20;
if (num % 2 === 0) {
    console.log("The number is even");
};
//(num % 2 === 0) this is the condition inside  of ();

// else Statement

/**
 * if (condition) {
    //block of code to be executed if the condition is true
  } else {
    //block of code to be executed if the condition is false
  }
 */

  let age = 17;
  if (age >= 18) {
    console.log("You are an adult");
  } else {
    console.log("You are not an adult");
  }

  //condition with if else statement

let number = 13; //if you change the value of given declaration and it is not divisible by 2 the else statement activate.
if (!number % 2 === 0){
    console.log("prime number")
}else {
    console.log("even number")
}


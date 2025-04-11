//ERROR HANDLING

try {
    // Code that might throw an error
    let result = riskyFunction();
    console.log(result);
} catch (error) {
    // Code to handle the error
    console.error("An error occurred:", error.message);
}


//EXAMPLE IN THIS CODE IN WHICH THE Y IS NOT DEFINED SO IT WILL THROW AN ERROR

try {
    let x = y + 1; // y is not defined
} catch (err) {
    console.log("Error caught:", err.message);
}

// try.. catch.. finally
//The finally block will always run, whether there’s an error or not.


try {
    let result = 10 / 2; // No error
    console.log(result); // Output: 5
} catch (err) {
    console.log("Error:", err);
} finally {
    console.log("This will always run."); // Output: This will always run.
}


//EXAMPLE

try {
    let result = 10 / undefinedVariable; // undefinedVariable is not defined
    console.log(result);
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("This will always run.");
}
